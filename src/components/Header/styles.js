import styled from "styled-components";

export const StyledRightAside = styled.div`
{
    display: flex;
}
span {
 margin: auto 10px auto 0;
 color: ${(props) => props.styles.hoverLink}
}
`

export const LogoBlock = styled.div`
img {
    width: 50px;
}
`
