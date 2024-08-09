import { createContext, useContext, useState } from "react";

const OrderContnext = createContext();

export const OrderProvider = ({ children }) => {
	// данные из order.jsx для работы в контексте
	const [orderDetails, setOrderDetails] = useState({
		name: '',
		phone: '',
		address: '',
		payment: 'cash',
	});


	// функция обновления данных в контексте
	const updateOrderDetails = (field, value) => {
		setOrderDetails((prevDetails) => ({
			...prevDetails,
			[field]: value,
		}));
	}

	// очистка данных для передачи в order.jsx
	const clearOrderDetails = () => {
		setOrderDetails({
			name: '',
			phone: '',
			address: '',
			payment: 'cash',
		});
	}



	// разметка провайдера контекста
	return (
		<OrderContnext.Provider value={{ orderDetails, updateOrderDetails, clearOrderDetails }}>
			{children}
		</OrderContnext.Provider>
	)


}


export const useOrder = () => useContext(OrderContnext);