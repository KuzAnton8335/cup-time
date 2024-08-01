import { Route, Routes } from "react-router-dom";
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
