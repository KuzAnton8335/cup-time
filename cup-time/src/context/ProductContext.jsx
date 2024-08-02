
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../const";

// ! остановился на времени 21:01
const ProductContenxt = createContext();

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState("");

	useEffect(() => {
		if (category) {
			fetch(`${API_URL}/api/products/${category}`){
		.then(response => response.json())
		.then((data) => setProducts(data))
		.catch((error) => console.error(`Error fetching products: ${error}`))
}
		}
	}, [category])
}