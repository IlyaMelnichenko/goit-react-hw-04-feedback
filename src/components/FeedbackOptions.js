import { StyledButton } from "./StyledFeedBack"

export const FeedbackOptions= ({options,onClickAdd})=>{
    return(
<>
{options.map((option) => (
    <StyledButton
       key={option}
       onClick={() => onClickAdd(option)}
    >
        <p>{option}</p>
    </StyledButton>
 ))}
</>
    )
}