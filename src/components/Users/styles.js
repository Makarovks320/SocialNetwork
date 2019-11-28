import styled from 'styled-components'

export const Info = styled.div`
  padding: 10px;
  background-color: ${(props)=>props.isFollowed ? props.styles.subBG : props.styles.mainLink};
  border: 2px solid black;
  border-radius: 10px;
  color: ${(props)=>props.styles.hoverMainText};
`;

