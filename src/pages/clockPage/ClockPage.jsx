import React, { useEffect, useState } from 'react';
import * as addDays from 'date-fns'
import Layout from '../../compnents/layout/Layout';

function ClockPage(props) {

    const getDate = (date) => {
           
        return{
        hours: addDays.getHours(date), 
        minutes: addDays.getMinutes(date) ,
        seconds: addDays.getSeconds(date) , }
    }
   

    const [date, setDate] = useState(new Date());
    const time =  getDate(date)
    const formatTime = (time) =>{
      return time < 10 ? `0${time}` : time 
    } 
    useEffect (() => {
      setTimeout(() =>{
          setDate(new Date());
         },1000 ) },
         [date]);

         
  

    return (
        <Layout>
            <h1>Clock</h1>
            <h1> {formatTime(time.hours)} : {formatTime(time.minutes)} : {formatTime(time.seconds)}</h1>
        </Layout>
    );
}

export default ClockPage;