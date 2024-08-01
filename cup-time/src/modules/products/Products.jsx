import { products } from "../../products-data.js";
import { Product } from "../product/Product";
import "./products.scss";

export const Products = () => {
	return (
		<>
			<section className="products">
				<div className="container">
					<h2 className="products__title">Чай</h2>
					<ul className="pdocts__list">
						{products.map((item) => (
							<Product key={item.id} data={item} />
						))}
					</ul>
				</div>
			</section>
		</>
	)
}
