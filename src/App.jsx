import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '../src/pages/Header'
import Home from '../src/pages/Home'
import CarInformation from '../src/pages/carDetails/CarInformation'

function App() {
    return ( <
        div className = "App" >
<Header></Header>
<BrowserRouter>
 <Route  path='/bid/:id' component={CarInformation}></Route>
 <Route exact path='/' component={Home}></Route>
 </BrowserRouter>
        <
        /div>
    );
}

export default App;