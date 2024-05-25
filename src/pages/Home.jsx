import { taskList } from '../db/tasks';
import { Task } from '../components/Task';


export const Home = () => {
    const upcomingList = taskList.filter(el=>
        el.type==="Upcoming"
    );
    const inProgress = taskList.filter(el=>
        el.type==="In Progress"
    );
    const completed = taskList.filter(el=>
        el.type==="Completed"
    );

  return (
     <div className="content">
            <div className="container">
                
                <div className="row">

                    <div className="col-lg-4">
                        <div className="card-box">
                            <h4 className="text-dark header-title">Upcoming</h4> 
                            <ul className="sortable-list taskList list-unstyled ui-sortable" id="upcoming">
                                {upcomingList.map(el=>                                    
                                    <Task key={el.id} description={el.description} avatar={el.user}/>                                        
                                )}
                            </ul>
                            <a href="#" className="btn-add-new">
                            <i className="fa fa-plus-circle"></i> Add New</a>
                        </div>

                    </div>



                    <div className="col-lg-4">
                        <div className="card-box">
                            <h4 className="text-dark header-title">In Progress</h4>
                            <ul className="sortable-list taskList list-unstyled ui-sortable" id="upcoming">
                                {inProgress.map(el=>                                    
                                    <Task key={el.id} description={el.description} avatar={el.user}/>                                        
                                )}
                            </ul>
                            <a href="#" className="btn-add-new">
                            <i className="fa fa-plus-circle"></i> Add New</a></div>
                    </div>



                    <div className="col-lg-4">
                        <div className="card-box">
                            <h4 className="text-dark header-title">Completed</h4>
                            <ul className="sortable-list taskList list-unstyled ui-sortable" id="upcoming">
                                {completed.map(el=>                                    
                                    <Task key={el.id} description={el.description} avatar={el.user}/>                                        
                                )}
                            </ul>
                            <a href="#" className="btn-add-new">
                            <i className="fa fa-plus-circle"></i> Add New</a></div>
                    </div>

                </div>       
            </div>    
        </div>
  )
}
