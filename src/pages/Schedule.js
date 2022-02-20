// 引入 React 功能
import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
// import { useHistory } from "react-router-dom";

// 引入 utils
import {API_URL} from "../utils/config";
import {Container} from 'react-bootstrap' 
// import 'bootstrap'
import './schedule.scss'
import 'cors'

// 引入圖片們
import scheduleText2 from './Schedule/img/scheduleText2.svg'
import scheduleIcon1 from './Schedule/img/scheduleIcon1.svg'

// 引入 component
import Intro from './Schedule/Intro.js'
import Calendar from './Schedule/calendarE.js'
import Notes from './Schedule/Notes.js'
import Post from './Schedule/Post'





function calandar() {

  // // const Schedule = () => {
  // //   const [error, setError] = useState(null);
  //   const [data, setData] = useState();
  
  //     let getSchedule = async () => {
  //       // http://localhost:3002/api/schedule
  //       try {
  //         let response = await axios.get(`${API_URL}/calenderE/Schedule`);
  //         console.log(response.data);
  //         // setData(response.data);


  //       } catch(e) {
  //         console.error(e.response);
  //       }
  //     };
  //     getSchedule();
  // // }

  return (
    <>
    <div>
    {/* <nav className="nav"></nav> */}

    <Container>
      <div className="etext">
        <img src={scheduleText2} alt="" className="img-fld" />
      </div>
      <div className="iconPost">
        <img src={scheduleIcon1} alt="" />
      </div>
      
      <div className="Introdiv">
      <Intro/>
      </div>
      <div className="Calendardiv">
      <Calendar/>
      </div>
      <div className="Notesdiv">
      <Notes/>
      </div>
      <div className="scheduleCharts">
      {/* <Charts/> */}
      </div>
        <div className="Postdiv bg-primary position-relative">
          {/* <footer></footer> */}
        </div>
    </Container>

        <Post/>
    </div>
    </>
  )

}






export default calandar;
