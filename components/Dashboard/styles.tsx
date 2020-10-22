import styled from 'styled-components'

export const DashboardTitle = styled.h1`

  text-decoration : underline;
  font-weight : light;
  line-height :2;
  color : brown;
  
`

export const DashboardUser = styled.h3`

  color : lightseagreen;
  font-size : 1.5em;

  &::before{
  content : "User Name :  "
  }

`

export const StoriesContainer = styled.div`

  display:flex;
  flex-wrap : wrap;
  justify-content : center;
  margin : 15px;

`