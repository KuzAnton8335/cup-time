import { Product } from "../product/Product";
import "./products.scss";
const products = [
	{
		id: 1,
		image: "./img/photo-11.jpeg",
		title: "Кокосовая матча",
		price: "390 ₽",
	},
	{
		id: 2,
		image: "./img/photo-12.jpeg",
		title: "Зеленый индонезийский чай",
		price: "340 ₽ ",
	},
	{
		id: 3,
		image: "./img/photo-13.jpeg",
		title: "Черный чай из Эфиопии",
		price: "380 ₽ ",
	},
	{
		id: 4,
		image: "./img/photo-14.jpeg",
		title: "Черный чай из Калифорнии",
		price: "360 ₽ ",
	},
	{
		id: 5,
		image: "./img/photo-15.jpeg",
		title: "Органическая веганская матча",
		price: "400 ₽",
	},
	{
		id: 6,
		image: "./img/photo-16.jpeg",
		title: "Чай черный Лакандона",
		price: "400 ₽",
	},
]

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
