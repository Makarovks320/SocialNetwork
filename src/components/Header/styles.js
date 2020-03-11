import styled from "styled-components";

const StyledRightAside = styled.div`
{
    display: flex;
}
span {
 margin: auto 10px auto 0;
 color: ${(props) => props.styles.hoverLink}
}
`

export default StyledRightAside;