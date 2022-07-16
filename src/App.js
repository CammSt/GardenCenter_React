import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

	let greeting = "Bienvenido a Garden Center"

	return (
		<div>
			<NavBar/>
			<ItemListContainer greeting={greeting}/>
		</div>
	);
}

export default App;
