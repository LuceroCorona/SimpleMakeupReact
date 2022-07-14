import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  const title='Simple Makeup';

  const data = {
    greeting: '(╯°□°）╯︵ ┻━┻'
  };

  return(
    <>
    <NavBar/>
    <ItemListContainer greeting={data.greeting}/>
    <ItemCount stock={10} initial={1} />
    </> 
  );
}

export default App;


