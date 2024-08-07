import { useState } from "react";
import { API_URL } from "../../const";
import { useCart } from "../../context/CartContext";
import "./cartitem.scss";

export const CartItem = ({ data }) => {
	// полученте данных для input
	const [itemQuantity, setItemQuantity] = useState(data.quantity);
	const [updateQuantity] = useCart();

	const handleDecrease = () => {
		const newQuantity = itemQuantity - 1;
		if (newQuantity > 0) {
			setItemQuantity(newQuantity)
			updateQuantity(data.id, newQuantity)
		} else {
			updateQuantity(data.id, 0)
		}
	}
	const handleIncrease = () => {
		const newQuantity = itemQuantity + 1;
		setItemQuantity(newQuantity)
		updateQuantity(data.id, newQuantity)
	}


	return (
		<li className="cart-item">
			<img src={`${API_URL}${data.img}`} alt={data.title} className="cart-item__img" />
			<div className="cart-item__info">
				<h3 className="cart-item__title">{data.title}</h3>
				<div className="cart-item__quantity">
					<button className="cart-item__quantity-btn cart-item__quantity-btn_minus" onClick={handleDecrease}>-</button>
					<input type="number" className="cart-item__quantity-input" value={data.quantity} readOnly />
					<button className="cart-item__quantity-btn cart-item__quantity-btn_plus" onClick={handleIncrease}>+</button>
				</div>
				<p className="cart-item__price">{data.price * data.quantity}&nbsp;</p>
			</div>
		</li>
	)
}
