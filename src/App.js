import './App.css';
import Home from '../src/pages/home';
import AskApproval from '../src/pages/AskApproval';
import Apprec from '../src/pages/ReccomendationApproval';
import {HashRouter,Route} from 'react-router-dom';
import {Component} from 'react';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey:"AIzaSyBKj2EQDhdJUJVgybDAqwFLO7Il_KBBuUo",
  authDomain:"myntraclone-a8cee.firebaseapp.com"
})

class App extends Component {
   state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
render(){
  return (

    <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <HashRouter>
            <div>
                <Route path="/" exact render={Home}/>
                <Route path="/AskApproval" render={AskApproval}/>
                <Route path="/Apprec" render={Apprec}/>
            </div>
            </HashRouter >
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div> 
  );
  }
}

export default App;
