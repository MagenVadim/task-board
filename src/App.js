import './App.css';
import { Home } from './pages/Home';
import { TaskView } from './pages/TaskView';
import { UserCard } from './pages/UserCard/UserCard';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
       <>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/task/view/:id' element={<TaskView/>}/>
            <Route path='/users/card/:fullName' element={<UserCard/>}/>
          </Routes>
       </>
  );
}

export default App;