import './App.css';
import Home from '../src/pages/home';
import AskApproval from '../src/pages/AskApproval';
import Apprec from '../src/pages/ReccomendationApproval';
import {HashRouter,Route} from 'react-router-dom';
function App() {
  return (
    <HashRouter>
            <div>
                <Route path="/" exact render={Home}/>
                <Route path="/AskApproval" render={AskApproval}/>
                <Route path="/Apprec" render={Apprec}/>
            </div>
      </HashRouter >
    
  );
}

export default App;
