import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '../src/pages/Header'
import CarInformation from '../src/pages/carDetails/CarInformation'

function App() {
    return ( <
        div className = "App" >
<Header></Header>
<BrowserRouter>
 <div>
 <Route exact path='/bid/:id' component={CarInformation}></Route>
 </div>
 </BrowserRouter>
        <
        /div>
    );
}

export default App;