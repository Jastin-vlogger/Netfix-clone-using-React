import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {Actions,original,Trending,Horror} from './url'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <RowPost url={original} title="Netflix originals" isSmall/>
      <RowPost url={Actions} title="Action" isSmall />
      <RowPost url={Trending} title='Trendings' />
      <RowPost url= {Horror} title='HORROR' isSmall/>
    </>
  );
}

export default App;
