import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Home from './screens/Home';

import { newItems } from './variables/newItems'

function App() {

	let cartList = []

	let screenTitle = "HOME"

	return (
		<div>
			<NavBar/>
			<Header screenTitle={screenTitle}/>
			<ItemListContainer list={newItems} cartList={cartList}/>
		</div>
	);
}

export default App;
