import styled from 'styled-components'

export const Info = styled.div`
  padding: 10px;
  background-color: ${(props)=>props.isFollowed ? props.styles.subBG : 'rgb(252, 100, 133)'};
  border: 2px solid black;
  border-radius: 10px;
`;

