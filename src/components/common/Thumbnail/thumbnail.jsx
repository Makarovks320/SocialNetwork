import React from "react";
import userPic from "../../../img/genericUser.png";
import {connect} from 'react-redux';
import styled from "styled-components";

const StyledThumbnail = styled.div`{
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
}`

const Thumbnail = (props) => {
    return (
        <StyledThumbnail>
            <img alt="avatar" src={!props.authorizedUserPhoto ? userPic : props.authorizedUserPhoto || userPic} width="100%"/>
        </StyledThumbnail>
    )
}

let mapStateToProps = (state) => ({
    authorizedUserPhoto: state.profilePage.authorizedData.userPhoto,
});
export default connect(mapStateToProps)(Thumbnail);
