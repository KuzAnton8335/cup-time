import { Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
	return (
		<>
			<header className="header">
				<div className="container header__container">
					<Link to="/" className="header__logo">
						<img src="./img/logo.svg" alt="Логотип cup time" className="header__logo-img" />
					</Link>
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
					<div className="header__mobail-menu">
						<Link to="cart" className="header__cart-link">
							6
						</Link>
						<button className="header__burger">
							<span className="header__burger-line"></span>
						</button>
					</div>
				</div>
			</header>
		</>
	)
}
