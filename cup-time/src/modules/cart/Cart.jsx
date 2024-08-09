import { useState } from "react";
import { API_URL } from "../../const";
import { useCart } from "../../context/CartContext";
import { useOrder } from "../../context/OrderContext";
import { CartItem } from "../CartItem/CartItem";
import SkeletonLoader from "../skeleton-loader/SkeletonLoader";
import "./cart.scss";
// ! Остановился на времени 32:12
export const Cart = () => {
	// статус заказа из корзины из хука useState
	const [orderStatus, setOrderStatus] = useState(null);

	// номер заказа с сервера
	const [orderId, setOrderId] = useState(null);

	// модальное окно состояния заказа из хука useState
	const [modalIsOpen, setModalIsOpen] = useState(false);

	// данные для коззины из контекста useCart (CartContext) возвращает объект с данными
	const { cart = [], clearCart, } = useCart();
	// данные корзины из контекста useOrder (OrderContext)
	const { orderDetails, clearOrderDetails } = useOrder();

	// функция отправки данных
	const handleSubmit = async () => {
		const orderData = {
			...orderDetails,
			items: cart.map(item => ({ id: item.id, quantity: item.quantity })),
		}
		// отправка данных
		try {
			const response = await fetch(`${API_URL}/api/orders`, {
				method: "POST",
				header: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(orderData),
			})
			// проверка отправки данных
			if (!response.ok) {
				throw new Error("Ошибка при отаправки заказа");
			}

			// запись данных в result
			const result = await response.json();
			setOrderStatus('success');
			setOrderId(result.order.id);
			clearCart();
			clearOrderDetails();
		} catch (error) {
			setOrderStatus('error');
			console.error(`Ошибка:${error}`)
		} finally {
			setModalIsOpen(true)
		}
	}
	// расчет ценны заказа в корзине из данных cart
	const totalPrice = cart ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0) : 0;

	// разметка корзины
	return (
		<section className="cart">
			<div className="container cart__container">
				<h2 className="cart__title">Корзина ({cart ? cart.length : 0})</h2>
				<ul className="cart__items">
					{cart ? (cart.map((item) => (
						<CartItem key={item.id} data={item} />))) : (
						<SkeletonLoader />
					)}
				</ul>
				<div className="cart__summary">
					<h3 className="cart__summary-title">Итого:</h3>
					<p className="cart__summary-total">
						{totalPrice}&nbsp;₽
					</p>
					<button className="cart__order-btn" onClick={handleSubmit}>Заказать</button>
				</div>
			</div>
		</section>
	)
}
