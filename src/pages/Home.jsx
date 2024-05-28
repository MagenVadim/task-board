import { taskListDB } from '../db/tasks';
import { Column } from '../components/Column';
import { Header } from '../components/Header/Header'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {dataLoading} from '../store/taskSlice'

export const Home = () => { 

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(dataLoading([...taskListDB]))
    },[])

    const upcomingList = taskListDB.filter(el=>
        el.type==="Upcoming"
    );
    const inProgressList = taskListDB.filter(el=>
        el.type==="In Progress"
    );
    const completedList = taskListDB.filter(el=>
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
