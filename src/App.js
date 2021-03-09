import React,{useEffect,useState} from 'react'
import Loader from './components/Loader';
import HomeScreen from './screens/HomeScreen'


function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //    setLoading(false);
  //  },3000) 

  // }, [])


  return (
    <div>
      {loading ? (<Loader />)
        :<HomeScreen />
      }
      
    </div>
  );
}

export default App;

