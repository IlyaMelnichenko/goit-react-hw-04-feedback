import React  from 'react';
import { StyledFeedBack } from './StyledFeedBack';
import { Statistic } from './Statistic';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';
import { useState } from "react";




export const App=()=>{
  const[good,setGood]=useState(0);
  const[bad,setBad]=useState(0);
  const[neutral,setNeutral]=useState(0);
 

  const onClickAdd = (type) =>{
    if(type==='good'){
      setGood(prevState => prevState + 1);
    }else if(type==='bad'){
      setBad(prevState => prevState + 1);
    }else{
      setNeutral(prevState => prevState + 1);
    }
  } 
     

     
  
  

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.floor((good / countTotalFeedback()) * 100);
  };
  const totalFeedback = countTotalFeedback();
  const positivePercentage= countPositiveFeedbackPercentage();
  const options = ['good','bad','neutral']
  return (
      <StyledFeedBack>
        <Section title="Please leave feedback">
        <FeedbackOptions onClickAdd={onClickAdd}  options={options} />
        </Section>
        <Section title="Statistics">
       {countTotalFeedback()===0?(<Notification message={'Please leave feedback'} />):(
       <Statistic
          good={good}
          bad={bad}
          neutral={neutral}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />)
      }
       </Section>
      </StyledFeedBack>
      
    );
  
}
