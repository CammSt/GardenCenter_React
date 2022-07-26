import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {

	let cartList = []

	let screenTitle = "HOME"

	return (
		<div>
			<NavBar />
			<Header screenTitle={screenTitle} />
			<ItemListContainer cartList={cartList} />
		</div>
	);
}

export default App;
