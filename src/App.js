import './App.css';
import Header from './components/Header';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './views/Home';
import SearchCountries from './views/SearchCountries';
import NotFound from './views/NotFound';
import DetailsCountry from './views/DetailsCountry';
function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route path= "/"  exact>
        <Header/>
        <Home/>
      </Route >
      <Route path= "/SearchCountries"  exact>
      <Header/>
        <SearchCountries/>
      </Route>
      <Route path= "/details/:capital"  exact>
      <Header/>
        <DetailsCountry/>
      </Route>      
      <Route path= "*" >
        <NotFound/>
      </Route>
    </Switch>
    </BrowserRouter>
  
    );
}

export default App;
