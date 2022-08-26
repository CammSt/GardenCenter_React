import React from 'react'

import './App.css';
import CartProvider from './contexts/CartContext';
import PrincipalRoute from './routes/PrincipalRoute';

function App() {
	return (
		<CartProvider>
			<PrincipalRoute/>
		</CartProvider>
	);
}

export default App;