import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../css/dashboard.css";

function Dashboard() {
  const [allTask, setAllTask] = useState([]);
  const [listTasks, setListAllTask] = useState([])
  const [task, setCreateTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [deleteTask, setDeleteTAsk] = useState("");
  const [search, setSearch] = useState('')

  let history = useHistory()

  const config = {
    url: "http://localhost:5000/v1/myapp/task",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const createTask = {
    url: "http://localhost:5000/v1/myapp/task",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: { name: task, completed: false, display: true },
  };

  // const deleteTaskData = {
  //   url: "http://localhost:5000/v1/myapp/task/"+deleteTask,
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" }
  // };

  useEffect(async () => {
    let alltaskData = await axios(config)
      .then((data) => (data.data.success = true ? data.data.data : []))
      .catch((error) => console.log(error.message));

      setAllTask(alltaskData)
    setListAllTask(alltaskData.filter((item)=> item.name.includes(search)));
  }, [allTask]);
  var completed = allTask && allTask.filter((item) => item.completed === true);

  const onChangeUserName = (e) => {
    setCreateTask(e.target.value);
  };

  const onTaskCreation = async () => {
    await axios(createTask)
      .then((data) => console.log("==========", data))
      .catch((error) => console.log(error.message));
  };

  const onEdit = async (id) => {
    const editTaskData = {
      url: "http://localhost:5000/v1/myapp/task/" +id,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: { name: editTask},
    };

    await axios(editTaskData)
      .then((data) => console.log("==========", data))
      .catch((error) => console.log(error.message));
  };

  const onDelete = async (id, name) => {
    const deleteTaskData = {
      url: "http://localhost:5000/v1/myapp/task/" + id,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      data: { name: name }
    };

    await axios(deleteTaskData)
      .then((data) => console.log("==========", data))
      .catch((error) => console.log(error.message));
  };

const onChangeTask =(e)=>{
  setEditTask(e.target.value)
}

const onSearch = (e)=>{
  setSearch(e.target.value)
}

const onLogout =()=>{
  history.push('/')
}
// const tasks = allTask.filter((item)=> item.name.includes(search))

// console.log("===========", tasks);
  return (
    <>
      <div className="top_Nav">
        <div className="avthar_img">
          <img
            src="../../images/avatarimg.png"
            alt="donn-gabriel-baleva-U-Z4-P2-H3-KFE-unsplash"
            border="0"
          />
        </div>

        <div className="nav_text">
          <p className="name">Name</p>
          <button className="logout" onClick={onLogout}>Logout</button>
        </div>
      </div>
      {/* <div className="new_task">   
               <p>You have no task.</p>
               <button className="btn btn-primary newtask_btn" type="submit">+ New Task</button>
           </div> */}

      <div className="modal fade login_container" id="myModal" role="dialog">
        <div className="container modal-dialog">
          <div className="modal-content">
            <p className="login_title">+ New Task</p>
            <div className="modal-body">
              <input
                className="email_value"
                type="text"
                name="task"
                placeholder=" Task"
                onChange={onChangeUserName}
              />
              <br />
              <button
                className="btn btn-primary login_btn"
                type="submit"
                data-dismiss="modal"
                onClick={onTaskCreation}
              >
                + New Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="top_cards">
        <div className="row">
          {/* First Box */}
          <div className="col-sm-4">
            <div className="new_task">
              <h4>&nbsp; &nbsp; Task Completed</h4>
              <div>
                <p>
                  {completed.length}/{allTask.length ? allTask.length : ""}
                </p>
              </div>
            </div>
          </div>
          {/* Second Box */}
          <div className="col-sm-4">
            <div className="new_task" style={{"overflow":"scroll"}}>
              <h4>&nbsp; &nbsp; Latest Create Tasks</h4>
              <ul>
                {allTask &&
                  allTask.map((item, index) => {
                    return <li>{item.name}</li>;
                  })}
              </ul>
            </div>
          </div>
          {/* Third Box */}
          <div className="col-sm-4">
            <div className="new_task"></div>
          </div>
        </div>
      </div>

      <div className="top_cards">
        <div className="row">
          <div className="col-sm-2 topcardname">Tasks</div>
          <div className="col-sm-6"></div>
          <div className="col-sm-2">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input
              className="search"
              type="text"
              placeholder="Search"
              onChange = {onSearch}
            />
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              className="btn btn-primary newtask_btn"
              data-toggle="modal"
              data-target="#myModal"
            >
              + New Task
            </button>

            {/* <button className="btn btn-primary newtask_btn" type="submit">+ New Task</button> */}
          </div>
        </div>
      </div>

      {/* Task lists */}
      <div className="top_cards">
        <div className="row">
          <div className="col-sm-12">
            <ul style={{   "backgroundColor":"white", "margin":'10px'}}>
              {listTasks &&
                listTasks.map((item, index) => {
                  return (
                    <li className="listoftasks">
                      <input type="checkbox" style={{"marginRight":"20px"}} />
                      <p style={{"marginRight":"20px"}}>{item.name}</p>

                      <button
                        type="button"
                        className=""
                        data-toggle="modal"
                        data-target="#editModal"
                        style={{"marginRight":"20px"}}
                      >
                        <img src="../../images/pen-solid.svg" alt="edit" />
                      </button>
                      <div
                        className="modal fade login_container"
                        id="editModal"
                        role="dialog"
                      >
                        <div className="container modal-dialog">
                          <div className="modal-content">
                            <p className="login_title">Edit Task</p>
                            <div className="modal-body">
                              <input
                                className="email_value"
                                type="text"
                                name="editTask"
                                value={editTask}
                                placeholder=" Task"
                                onChange={onChangeTask}
                              />
                              <br />
                              <button
                                className="btn btn-primary login_btn"
                                type="submit"
                                data-dismiss="modal"
                                onClick={()=>onEdit(item["_id"])}
                              >
                                Edit Task
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button style={{"marginRight":"20px"}} onClick={() => onDelete(item["_id"], item.name)}>
                        <img src="../../images/trash-solid.svg" />
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
