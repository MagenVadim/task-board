import { taskListDB } from '../db/tasks';
import { Column } from '../components/Column';
import { Header } from '../components/Header/Header'
import { useEffect } from 'react';
import {dataLoading} from '../store/taskSlice'
import { useSelector, useDispatch } from 'react-redux'

export const Home = () => { 
    const dispatch = useDispatch();
    
    const taskStore = useSelector(state => state.taskReducer) 
    useEffect(()=>{ 
        dispatch(dataLoading(taskListDB)) 
    },[])
     
   
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
                    <Column key="col-1" title={"Upcoming"} cardList={upcomingList} />
                    <Column key="col-2" title={"In Progress"} cardList={inProgressList} />
                    <Column key="col-3" title={"Completed"} cardList={completedList} />
                </div>       
            </div>    
        </div>
  )
}
