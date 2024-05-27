import { taskList } from '../db/tasks';
import { Column } from '../components/Column';
import { Header } from '../components/Header/Header'

export const Home = () => {    
    const upcomingList = taskList.filter(el=>
        el.type==="Upcoming"
    );
    const inProgressList = taskList.filter(el=>
        el.type==="In Progress"
    );
    const completedList = taskList.filter(el=>
        el.type==="Completed"
    );

  return (
     <div className="content">
            <div className="container">
                <Header/>
                <div className="row">                    
                    <Column title={"Upcoming"} cardList={upcomingList}/>
                    <Column title={"In Progress"} cardList={inProgressList}/>
                    <Column title={"Completed"} cardList={completedList}/>

                </div>       
            </div>    
        </div>
  )
}
