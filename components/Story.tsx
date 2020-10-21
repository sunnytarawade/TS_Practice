import React, { useState } from "react";
import "./Story.css";

export type StoryProps = {
  storyName: string;
  storyBody: string;
  otherDetails?: string | "No other details";
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
    <div className="Story">
      <h1>{storyName}</h1>
      <h2>{dateString}</h2>
      <p>{storyBody}</p>
      <p>{otherDetails}</p>
      <button onClick={handleClick}>Refresh Date</button>
    </div>
  );
};

export default Story;
