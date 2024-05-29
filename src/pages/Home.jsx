import { taskListDB } from '../db/tasks';
import { Column } from '../components/Column';
import { Header } from '../components/Header/Header'
import { useEffect } from 'react';
import {dataLoading} from '../store/taskSlice'
import { useSelector, useDispatch } from 'react-redux'

export const Home = () => { 
    const dispatch = useDispatch();
    
    useEffect(()=>{        
        taskListDB.forEach(task=>{
            dispatch(dataLoading(task))            
        })
    },[])

    const taskStore = useSelector(state => state.taskReducer)   
   
    const upcomingList = taskStore.filter(el=>
        el.type==="Upcoming"
    );
    const inProgressList = taskStore.filter(el=>
        el.type==="In Progress"
    );
    const completedList = taskStore.filter(el=>
        el.type==="Completed"
    );

  return (
     <div className="content">
            <div className="container">
                <Header/>
                <div className="row">                    
                    <Column title={"Upcoming"} cardList={upcomingList} />
                    <Column title={"In Progress"} cardList={inProgressList} />
                    <Column title={"Completed"} cardList={completedList} />

                </div>       
            </div>    
        </div>
  )
}
