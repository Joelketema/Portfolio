import './App.css';

import Nav from './Components/Nav'
import Wrapper from './Components/Wrapper';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Wrapper/>
    </div>
    </Router>
  );
}

export default App;
