import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	// запись данных в localStorage при помощи useEffect
	useEffect(() => {
		const storeCart = JSON.parse(localStorage.getItem("cart") || '[]');
		setCart(storeCart);
	}, []);

	// сохранения данных в localStorage
	useEffect(() => {
		if (Array.isArray(cart)) {
			localStorage.setItem("cart", JSON.stringify(cart))
		}
	}, [cart]);

	// функция добавления товара в корзину
	const addToCart = (product, quantity) => {
		const newCart = [...cart];

		const itemIndex = newCart.findIndex((item) => (item.id === product.id));
		if (itemIndex >= 0) {
			newCart[itemIndex].quantity += quantity;
		} else {
			newCart.push({ ...product, quantity })
		}
		setCart(newCart);
	}
	// функция удаления товара из корзины
	const removeToCart = (productId) => {
		setCart(cart.filter((item) => item.id !== productId))
	}
	// обновление данных о корзине
	const updateQuantity = (productId, quantity) => {
		if (quantity <= 0) {
			removeToCart(productId);
		} else {
			setCart(cart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
		}
	};



	return (
		<CartContext.Provider value={{ cart, addToCart, removeToCart, updateQuantity }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	return useContext(CartContext);
};