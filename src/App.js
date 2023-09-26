import './App.css';
import Foot from './components/Foot';
import Img from './components/Img';
import Logos from './components/Logos';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Logos />
      <Img />
      <SignIn />
      <Foot />
    </div>
  );
}

export default App;