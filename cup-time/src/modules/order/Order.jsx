import "./order.scss";

export const Order = () => {
	return (
		<section className="order">
			<div className="container">
				<h2 className="order__title">Доставка</h2>
				<form className="order__form">
					<input type="text" className="order__input" name="name" placeholder="Имя" />
					<input type="text" className="order__input" name="phone" placeholder="Телефон" />
					<input type="text" className="order__input order__input_address" name="address" placeholder="Адрес" />
				</form>
				<fieldset className="order__payment">
					<legend className="order__payment-title">Оплата:</legend>
					<label className="order__payment-label">
						<input type="radio" name="payment" className="order__radio" value="card" />
						Картой
					</label>
					<label className="order__payment-label">
						<input type="radio" name="payment" className="order__radio" value="cash" defaultChecked />
						Наличными
					</label>
				</fieldset>
			</div>
		</section>
	)
}
