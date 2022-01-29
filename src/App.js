import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage'

const Hatepage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div> 
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/hats" component={Hatepage}/>
      </Switch>
    </div>
  );
}

export default App;
