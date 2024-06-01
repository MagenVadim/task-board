import { taskListDB } from '../db/tasks';
import { Column } from '../components/Column/Column';
import { Header } from '../components/Header/Header'
import { useState, useEffect } from 'react'
import { dataLoading } from '../store/taskSlice'
import { useSelector, useDispatch } from 'react-redux'

export const Home = () => { 
    const dispatch = useDispatch();
    const [upcomingList, setUpcomingList] = useState([]);
    const [inProgressList, setInProgressList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    
    const taskStore = useSelector(state => state.taskReducer) 

    useEffect(()=>{ 
        dispatch(dataLoading(taskListDB)) 
    },[])

    useEffect(()=>{ 
        setUpcomingList(taskStore.filter(el=>
            el.type==="Upcoming"))
        setInProgressList (taskStore.filter(el=>
            el.type==="In Progress"))
        setCompletedList(taskStore.filter(el=>
            el.type==="Completed")) 
        console.log(taskStore)  
    },[taskStore])   

  return (
     <div className="content">
            <div className="container">
                <Header/>
                <div className="row">                    
                    <Column key="col-1" title={"Upcoming"} cardList={upcomingList} />
                    <Column key="col-2" title={"In Progress"} cardList={inProgressList} />
                    <Column key="col-3" title={"Completed"} cardList={completedList} />
                </div>       
            </div>    
        </div>
  )
}
