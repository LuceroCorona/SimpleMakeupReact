import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  const title="Simple Makeup";

  const data = {
    greeting: "(╯°□°）╯︵ ┻━┻"
  };

  return(
    <>
    <NavBar/>
    <ItemListContainer greeting={data.greeting}/>
    </> 
  );
}

export default App;


