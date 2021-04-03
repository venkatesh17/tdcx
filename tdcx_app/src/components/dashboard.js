import React from "react";
import "../css/dashboard.css";

function Dashboard() {
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
          <p className="logout">Logout</p>
        </div>
      </div>
      {/* <div className="new_task">   
               <p>You have no task.</p>
               <button className="btn btn-primary newtask_btn" type="submit">+ New Task</button>
           </div> */}

      <div className="top_cards">
        <div className="row">
          <div className="col-sm-4">
            <div className="new_task"></div>
          </div>
          <div className="col-sm-4">
            <div className="new_task"></div>
          </div>
          <div className="col-sm-4">
            <div className="new_task"></div>
          </div>
        </div>
      </div>

      <div className="top_cards">
        <div className="row">
          <div className="col-sm-2 topcardname">
            Tasks
          </div>
          <div className="col-sm-6">
            
          </div>
          <div className="col-sm-2">
          <i className="fas fa-search" aria-hidden="true" ></i>
        <input className="search" type="text" placeholder="Search" aria-label="Search" />
            </div>
          <div className="col-sm-2">
                <button className="btn btn-primary newtask_btn" type="submit">+ New Task</button>
          </div>
        </div>
      </div>

      <div className="top_cards">
        <div className="row">
          <div className="col-sm-12">
            <ul>
                <li className="listoftasks">
                    <input type="checkbox" />
                    <p>Clean the room</p>
                    <button><img src="../../images/pen-solid.svg" alt="edit" /></button>
                    <button><img src="../../images/trash-solid.svg" /></button>

                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
