import { StyledList } from "./StyledFeedBack";

export const Statistic = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <StyledList>
        <li>Good:{good}</li>
        <li>Bad:{bad}</li>
        <li>Neutral:{neutral}</li>
        <li>Total:{total}</li>
        <li>Positive Feedback:{positivePercentage}%</li>
      </StyledList>
    </>
  );
};
