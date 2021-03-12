import './App.css';
import Home from '../src/pages/home';
import {HashRouter,Route} from 'react-router-dom';
function App() {
  return (
    <HashRouter>
            <div>
                <Route path="/" render={Home}/>
            </div>
      </HashRouter >
    
  );
}

export default App;
