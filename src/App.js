import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import Header from './components/header/header';


function App() {
  return (
    <div> 
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
