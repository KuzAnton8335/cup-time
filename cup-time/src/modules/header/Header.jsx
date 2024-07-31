import "./header.scss";

export const Header = () => {
	return (
		<>
			<header className="header">
				<div className="container header__container">
					<a className="header__logo">
						<img src="./img/logo.svg" alt="Логотип cup time" className="header__logo-img" />
					</a>
					<nav className="header__nav">
						<ul className="header__menu">
							<li className="header__menu-item"><a href="#" className="header__menu-link header__menu-link--active">Чай</a>
							</li>
							<li className="header__menu-item">
								<a href="#" className="header__menu-link">Кофе</a>
							</li>
							<li className="header__menu-item">
								<a href="#" className="header__menu-link">Чайники</a>
							</li>
							<li className="header__menu-item">
								<a href="#" className="header__menu-link">Турки</a>
							</li>
							<li className="header__menu-item">
								<a href="#" className="header__menu-link">Прочее</a>
							</li>
						</ul>
					</nav>
					<a href="cart.html" className="header__cart-link">
						6
					</a>
				</div>
			</header>
		</>
	)
}
