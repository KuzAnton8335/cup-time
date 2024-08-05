import { Navigate, Route, Routes } from "react-router-dom";
import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";
import { Products } from "../products/Products";
import { Promo } from "../promo/Promo";

export const Main = () => {
	return (
		<>
			<main className="main">
				<Routes>
					<Route path="/" element={
						<Navigate to="/products?category=tea" />
					} />
					<Route path="/products" element={
						<>
							<Promo />
							<Products />
						</>
					} />
					<Route path="/cart" element={
						<>
							<Cart />
							<Order />
						</>
					} />
				</Routes>
			</main>
		</>
	)
}
