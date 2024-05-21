import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <div className="App">
      Helloo world.
      <Counter by={5}></Counter>      {/* //Adding props this will have this prop now. */}
      <Counter by={10}></Counter>     {/* int value in {} otherwise treated as a string.*/}
      <Counter by={15}></Counter>
    </div>
  );
}

export default App;
