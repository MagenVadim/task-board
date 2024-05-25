import './App.css';

function App() {
  return (
<div className='proba'>
<div className="content">
    <div className="container">
        
        <div className="row">
            <div className="col-lg-4">
                <div className="card-box">
                    <h4 className="text-dark header-title">Upcoming</h4>
                    <p className="text-muted m-b-30 font-13">Your awesome text goes here. Your awesome text goes here.</p>
                    <ul className="sortable-list taskList list-unstyled ui-sortable" id="upcoming">
                        <li className="task-warning ui-sortable-handle" id="task1">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Petey Cruiser</span></a>
                                </p>
                            </div>
                        </li>
                        
                        <li className="task-success ui-sortable-handle" id="task2">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>Many desktop publishing packages and web page editors now use Lorem.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Anna Sthesia</span></a>
                                </p>
                            </div>
                        </li>

                        <li id="task3" className="ui-sortable-handle">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>If you are going to use a passage of Lorem Ipsum..
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Gail Forcewind</span></a>
                                </p>
                            </div>
                        </li>

                        <li className="task-info ui-sortable-handle" id="task4">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Maya Didas</span></a>
                                </p>
                            </div>
                        </li>

                        <li className="task-danger ui-sortable-handle" id="task5">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>There are many variations of passages of Lorem Ipsum available.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Rick O'Shea</span></a>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-custom btn-block mt-3 waves-effect waves-light"><i className="fa fa-plus-circle"></i> Add New</a></div>
            </div>

            <div className="col-lg-4">
                <div className="card-box">
                    <h4 className="text-dark header-title">In Progress</h4>
                    <p className="text-muted m-b-30 font-13">Your awesome text goes here.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    <ul className="sortable-list taskList list-unstyled ui-sortable" id="inprogress">
                        <li id="task9" className="ui-sortable-handle">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>If you are going to use a passage of Lorem Ipsum..
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Gail Forcewind</span></a>
                                </p>
                            </div>
                        </li>
                        <li className="task-info ui-sortable-handle" id="task10">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Maya Didas</span></a>
                                </p>
                            </div>
                        </li>
                        <li className="task-danger ui-sortable-handle" id="task11">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>There are many variations of passages of Lorem Ipsum available.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Rick O'Shea</span></a>
                                </p>
                            </div>
                        </li>
                        <li className="task-warning ui-sortable-handle" id="task7">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Petey Cruiser</span></a>
                                </p>
                            </div>
                        </li>
                    </ul><a href="#" className="btn btn-custom btn-block mt-3 waves-effect waves-light"><i className="fa fa-plus-circle"></i> Add New</a></div>
            </div>

            <div className="col-lg-4">
                <div className="card-box">
                    <h4 className="text-dark header-title">Completed</h4>
                    <p className="text-muted m-b-30 font-13">Your awesome text goes here. Your awesome text goes here.</p>
                    <ul className="sortable-list taskList list-unstyled ui-sortable" id="completed">
                        <li className="task-warning ui-sortable-handle" id="task14">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Petey Cruiser</span></a>
                                </p>
                            </div>
                        </li>
                        <li className="task-success ui-sortable-handle" id="task15">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>Many desktop publishing packages and web page editors now use Lorem.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Anna Sthesia</span></a>
                                </p>
                            </div>
                        </li>
                        <li id="task16" className="ui-sortable-handle">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>If you are going to use a passage of Lorem Ipsum..
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Gail Forcewind</span></a>
                                </p>
                            </div>
                        </li>
                        <li className="task-info ui-sortable-handle" id="task17">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Maya Didas</span></a>
                                </p>
                            </div>
                        </li>
                        <li className="task-danger ui-sortable-handle" id="task18">
                            <div className="checkbox checkbox-custom checkbox-single float-right">
                                <input type="checkbox" aria-label="Single checkbox Two"/>
                                <label></label>
                            </div>There are many variations of passages of Lorem Ipsum available.
                            <div className="clearfix"></div>
                            <div className="mt-3">
                                <p className="float-right mb-0 mt-2">
                                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                                </p>
                                <p className="mb-0">
                                    <a href="" className="text-muted"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Rick O'Shea</span></a>
                                </p>
                            </div>
                        </li>
                    </ul><a href="#" className="btn btn-custom btn-block mt-3 waves-effect waves-light"><i className="fa fa-plus-circle"></i> Add New</a></div>
            </div>

        </div>       
    </div>    
</div>
</div>
  );
}

export default App;
