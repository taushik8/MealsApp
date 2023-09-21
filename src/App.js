import './App.css'
import Favourites from './components/Favourites';
import Meals from './components/Meals'
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './context';

function App() {

  const {showModal,favaourite}=useGlobalContext();
  return (
    <div>
      <Search></Search>
     {favaourite.length>0 && <Favourites/> }
      <Meals></Meals>
      {showModal && <Modal/>}
    </div>
  );
}

export default App;
