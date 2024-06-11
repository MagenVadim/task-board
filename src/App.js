import './App.css';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home';
import { TaskView } from './pages/TaskView/TaskView';
import { UserCard } from './pages/UserCard/UserCard';
import { CreateTask } from './pages/CreateTask/CreateTask';
import { TaskEdit } from './pages/TaskEdit/TaskEdit';
import { UsersDashboard } from './pages/UsersDashboard/UsersDashboard';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
       <>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/task/view/:id' element={<TaskView/>}/>
            <Route path='/users/card/:fullName' element={<UserCard/>}/>
            <Route path='/create' element={<CreateTask/>}/>
            <Route path='/task/edit/:id' element={<TaskEdit/>}/>
            <Route path='/users' element={<UsersDashboard/>}/>
          </Routes>
       </>
  );
}

export default App;