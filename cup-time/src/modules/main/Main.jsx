import { Products } from "../products/Products";
import { Promo } from "../promo/Promo";

export const Main = () => {
	return (
		<>
			<main className="main">
				<Promo />
				<Products />
			</main>
		</>
	)
}
