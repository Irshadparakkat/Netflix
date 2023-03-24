import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import { originals ,action, trending ,ComedyMovies ,HorrorMovies,RomanceMovies,Documentaries} from './urls';
function App() {
  return (
    <div className="App">
     
    <Navbar />
    <Banner />
    <RowPost  url={originals} title ='Netflix Originals' />
    <RowPost url={trending} title= 'Trending' isSmall />
    <RowPost url={action} title= 'Action' isSmall />
    <RowPost url={RomanceMovies} title= 'Romance' isSmall />
    <RowPost url={HorrorMovies} title= 'Horror' isSmall />
    <RowPost url={ComedyMovies} title= 'Comedy' isSmall />
    <RowPost url={Documentaries} title= 'Documentary' isSmall />

    </div>
  );
}

export default App;
