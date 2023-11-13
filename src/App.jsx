import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';


function App() {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting='Brindamos lo que necesites para tus entrenamientos de Crossfit, Fitness, Funcional'/>
            
        </div>
    );
}

export default App;