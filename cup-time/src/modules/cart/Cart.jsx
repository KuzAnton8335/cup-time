import { useCart } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import "./cart.scss";

export const Cart = () => {
	// !!! ошибка TypeError: useCart is not a function or its return value is not iterable разобратся - TypeError: useCart не является функцией или ее возвращаемое значение не поддается итерации
	// получения данных корзины из контекста useCart
	const { cart } = useCart();

	// получение ценны всех толваров из корзины методом cart.reduce()
	const totalPrice = cart ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0) : 0;

	return (
		<section className="cart">
			<div className="container cart__container">
				<h2 className="cart__title">Корзина (6)</h2>

				<ul className="cart__items">
					{cart.map((item) => (
						<CartItem key={item.id} data={item} />
					))}
				</ul>
				<div className="cart__summary">
					<h3 className="cart__summary-title">Итого:</h3>
					<p className="cart__summary-total">
						{totalPrice}&nbsp;₽
					</p>
					<button className="cart__order-btn">Заказать</button>
				</div>
			</div>
		</section>
	)
}
