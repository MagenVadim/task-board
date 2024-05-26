import './App.css';
import { Home } from './pages/Home';
import { View } from './components/View';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
       <>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/task/view/:id' element={<View/>}/>
          </Routes>
       </>
  );
}

export default App;