import React,{useEffect,useState} from 'react'
import Loader from './components/Loader';
import ChatScreeen from './screens/ChatScreeen';
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
     setLoading(false);
   },3000) 

  }, [])


  return (
    <Router>
      <Switch>
        <div>
        <Route exact path='/'>
      {loading ? (<Loader />)
        :<HomeScreen />
            }
          </Route>
          <Route exact path='/chat'>
            <ChatScreeen />
            </Route>
        </div>
        </Switch>
    </Router>
  );
}

export default App;

