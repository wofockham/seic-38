import Profile from './Profile';
import Clock from './Clock';

function App() {
  return (
    <div className="App">

      <Clock />

      <Profile name="Groucho Marx" age="45" motto="No gods no monsters" pic="http://via.placeholder.com/400" />
      <Profile name="Harpo Marx" age="44" pic="http://via.placeholder.com/401" />
      <Profile name="Chico Marx" age="46" motto="No gods no monsters" pic="http://via.placeholder.com/402" />
    </div>
  );
}

export default App;
