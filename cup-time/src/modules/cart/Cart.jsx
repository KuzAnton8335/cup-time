import { useCart } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import SkeletonLoader from "../skeleton-loader/SkeletonLoader";
import "./cart.scss";

export const Cart = () => {
	const { cart = [] } = useCart();
	const totalPrice = cart ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0) : 0;

	return (
		<section className="cart">
			<div className="container cart__container">
				<h2 className="cart__title">Корзина ({cart.length})</h2>
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
					<button className="cart__order-btn">Заказать</button>
				</div>
			</div>
		</section>
	)
}
