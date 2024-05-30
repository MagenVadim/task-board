import './App.css';
import { Home } from './pages/Home';
import { TaskView } from './pages/TaskView';
import { UserCard } from './pages/UserCard/UserCard';
import { CreateTask } from './pages/CreateTask/CreateTask';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
       <>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/task/view/:id' element={<TaskView/>}/>
            <Route path='/users/card/:fullName' element={<UserCard/>}/>
            <Route path='/create' element={<CreateTask/>}/>
          </Routes>
       </>
  );
}

export default App;