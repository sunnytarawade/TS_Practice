import React, { Component } from "react";
import Story, { StoryProps } from "../Story/index";
import {DashboardTitle,DashboardUser,StoriesContainer} from './styles'


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
        otherDetails : "Comedy"
      },
      
    ];

    return (
      <div>
        <DashboardTitle>Dashboard</DashboardTitle>
        <DashboardUser>{this.props.userName}</DashboardUser>

        <StoriesContainer>
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
        </StoriesContainer>
      </div>
    );
  }
}

export default Dashboard;
