import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <ItemListContainer gretting={'Hola soy una App de repaso!!'}></ItemListContainer>
    </div>
  );
}

export default App;
