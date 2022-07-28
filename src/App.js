import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

	let cartList = []

	let screenTitle = "HOME"

	return (
		<div>
			<NavBar />
			<Header screenTitle={screenTitle} />
			{/* <ItemListContainer cartList={cartList} /> */}
			<ItemDetailContainer cartList={cartList}/>
		</div>
	);
}

export default App;
