import React, { Component } from "react";
import Story, { StoryProps } from "./Story";

interface UserDetailsProps {
  userName: string;
  userId: number;
}

export interface ExtraUserDetails extends UserDetailsProps {
  activeStatus: boolean;
}

export class Dashboard extends Component<ExtraUserDetails> {
  render() {
    console.log(this.props);

    let i: number = 0;

    const storyArray: StoryProps[] = [
      {
        storyName: "Story 1",
        storyBody: "Lorem ipsum something something",
      },
      {
        storyName: "Story 2",
        storyBody: "Lorem ipsum something something",
      },
    ];

    return (
      <div>
        <h1>Dashboard</h1>
        <div className="User">
          <h2>{this.props.userName}</h2>
        </div>

        {storyArray.map((story: StoryProps) => {
          i++;
          return (
            <Story
              key={i}
              storyName={story.storyName}
              storyBody={story.storyBody}
              otherDetails={story.otherDetails}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
