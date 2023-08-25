import React, { Component } from 'react';
import { StyledFeedBack } from './StyledFeedBack';
import { Statistic } from './Statistic';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';




export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickAdd = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };
 
  
  render() {
    const total=this.countTotalFeedback();
    const positivePercentage=this.countPositiveFeedbackPercentage();
    return (
      <StyledFeedBack>
        <Section title="Please leave feedback">
        <FeedbackOptions onClickAdd={this.onClickAdd} options={Object.keys(this.state)} />
        </Section>
        <Section title="Statistics">
       {total===0?(<Notification message={'Please leave feedback'} />):(
       <Statistic
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          total={total}
          positivePercentage={positivePercentage}
        />)
      }
       </Section>
      </StyledFeedBack>
      
    );
  }
}
