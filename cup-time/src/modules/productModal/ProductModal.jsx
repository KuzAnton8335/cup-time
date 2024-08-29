import { useState } from "react";
import Modal from "react-modal";
import { API_URL } from "../../const.js";
import { useCart } from "../../context/CartContext.jsx";
import style from "./productModal.module.scss";


// const customStyles = {
// 	content: {
// 		top: '50%',
// 		left: '50%',
// 		right: 'auto',
// 		bottom: 'auto',
// 		marginRight: '-50%',
// 		transform: 'translate(-50%, -50%)',
// 	},
// };

Modal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useCart();

	if (!data) {
		return null;
	}

	const handleDecrease = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}
	const handleIncrease = () => {
		setQuantity(quantity + 1)
	}
	const handleAddToCart = () => {
		addToCart(data, quantity);
		onRequestClose();
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className={style.modal}
			overlayClassName={style.overlay}
			contentLabel={data.title}
		>
			<img className={style.image} src={`${API_URL}${data.img}`} alt={data.title} />
			<div className={style.content}>
				<div className={style.header}>
					<h2 className={style.title}>{data.title}</h2>
					<p className={style.price}>{data.price}&nbsp;P</p>
				</div>

				<ul className={style.list}>
					{Object.entries(data.additional).map(([key, value]) => (
						<li key={key} className={style.item}>
							<span className={style.field}>{key}:</span>
							<span className={style.value}>{value}</span>
						</li>
					))}
				</ul>

				<div className={style.footer}>
					<div className={style.count}>
						<button className={style.btn} onClick={handleDecrease}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#B8B8B8" />
								<rect x="6" y="11" width="12" height="2" fill="#1D1C1D" />
							</svg>
						</button>
						<input className={style.number} type="number" value={quantity} readOnly />
						<button className={style.btn} onClick={handleIncrease}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#B8B8B8" />
								<rect x="6" y="11.25" width="12" height="1.5" fill="#1D1C1D" />
								<rect x="11.25" y="18" width="12" height="1.5" transform="rotate(-90 11.25 18)" fill="#1D1C1D" />
							</svg>
						</button>
					</div>
					<button className={style.btnAddCart} onClick={handleAddToCart}>Добавить</button>
				</div>
				<button className={style.btnCloseCard} onClick={onRequestClose}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="5.71228" y="14.1976" width="12" height="1.5" transform="rotate(-45 5.71228 14.1976)" fill="#B8B8B8" />
					<rect x="14.1976" y="15.2582" width="12" height="1.5" transform="rotate(-135 14.1976 15.2582)" fill="#B8B8B8" />
				</svg>
				</button>
			</div>
		</Modal>
	)
}
