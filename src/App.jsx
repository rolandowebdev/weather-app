import Search from './components/search/Search';
import Location from './components/location/Location';

function App() {
  return (
    <div className='z-10 max-w-lg py-8 mx-auto '>
      <div className='flex items-center w-full gap-3 '>
        <Search />
        <Location />
      </div>
    </div>
  );
}

export default App;
