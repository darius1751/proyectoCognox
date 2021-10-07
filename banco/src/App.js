import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import User from './pages/User';
import Error404 from './pages/Error404';
import Loader from './components/Loader';
import Transferir from './pages/Transferir';
function App() {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(false);
  return (
    <div>
      
      <HashRouter>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/Login'/>
            </Route>
            <Route path='/Login' exact> 
              <Login setUser={setUser} user={user} setLoading={setLoading}/>
            </Route>
            <Route path='/user/:name'> 
              {loading && <Loader/>}
              {user?<User user={user} setUser={setUser}/>:<Redirect to='/Login'/>}
            </Route>
            <Route path='/transferir'>
              {loading && <Loader/>}
              {user?<Transferir user={user} setUser ={setUser} setLoading={setLoading}/>:<Redirect to='/Login'/>}
            </Route>
            <Route path='*' component={Error404}/>

          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
