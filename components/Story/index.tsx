import React, { useState } from "react";
import {StoryBox,StoryBody, StoryButton, StoryDate, StoryTitle,StoryOtherDetails} from './styles'
export type StoryProps = {
  storyName: string;
  storyBody: string;
  otherDetails?: 'Comedy' | 'Horror';
};

type refreshDate = (d: Date) => string;

const refreshDateFunction: refreshDate = (date) => {
  return JSON.stringify(date);
};

const Story: React.FC<StoryProps> = ({
  storyName,
  storyBody,
  otherDetails,
}): JSX.Element => {
  const initDateString = refreshDateFunction(new Date());
  const [dateString, setDateString] = useState<string>(initDateString);

  function handleClick(): void {
    let newDateString = JSON.stringify(new Date());
    setDateString(newDateString);
  }

  return (
    <StoryBox>
      <StoryTitle>{storyName}</StoryTitle>
      <StoryDate>{dateString}</StoryDate>
      <StoryBody>
        {storyBody}
        <StoryOtherDetails>{otherDetails || "No Other Details"}</StoryOtherDetails>
      </StoryBody>
      
      {/* <button onClick={handleClick}>Refresh Date</button> */}
      <StoryButton onClick={handleClick}>Refresh Date</StoryButton>
      </StoryBox>
  );
};

export default Story;
