import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext.jsx";
import { Product } from "../product/Product";
import SkeletonLoader from "../skeleton-loader/SkeletonLoader.jsx";
import "./products.scss";

export const Products = () => {
	const [searchParams] = useSearchParams();
	const { products, setCategory, categories } = useProducts();
	const category = searchParams.get("category");

	const categoryTitle = categories[category] || "Товары";

	useEffect(() => {
		setCategory(category);
	}, [category, setCategory]);
	return (
		<>
			<section className="products">
				<div className="container">
					<h2 className="products__title">{categoryTitle}</h2>
					<ul className="pdocts__list">
						{products.length ? products.map((item) => (
							<Product key={item.id} data={item} />
						)) : (<SkeletonLoader />)}
					</ul>
				</div>
			</section>
		</>
	)
}
