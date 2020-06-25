import styled from 'styled-components'

export const Status = styled.span`
  cursor: ${(props) => props.isOwner && 'pointer'};
  opacity: ${(props) => props.status ? 1 : .5};
`
export const ProfileMenu = styled.div`
  .updatePhoto,
  .setProfile {
    cursor: pointer;
    overflow: hidden;
    display: block;
    margin-right: 10px;
    position: relative;
    color: ${(props) => props.styles.mainText};
    text-align: right;
    text-align: center;
}

.updatePhoto [type=file] {
    display: block;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.updatePhoto:hover,
.setProfile:hover {
  color: ${(props) => props.styles.hoverLink};
}
`

export const PersonalData = styled.div`
.personalDataContainer {
  display: flex;
  flex-wrap: wrap;
  min-width: 290px;
  min-height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid ${(props) => props.styles.mainBorder};
  border-radius: 10px;
  background-color: ${(props) => props.styles.mainBG};
  color: ${(props) => props.styles.hoverLink};
}
.avatarBlock {
    width: 25%;
    @media (min-width: 476px) {
        width: 25%;
  }
}
.avatarBlock img {
  border: 2px solid ${(props) => props.styles.mainBorder};
  margin-right: 10px;
}
.profileDataContainer {
    width: calc(75% - 10px);
    margin-left: 10px;
    @media (min-width: 476px) {
        width: calc(75% - 10px);
        margin-left: 10px;
  }
}
.table {
  color: ${(props) => props.styles.hoverLink};
}
.table caption {
  caption-side: top;
  color: ${(props) => props.styles.hoverLink};
}
.table td:first-child {
 color: ${(props) => props.styles.mainLink};
}
.table td, 
.table th {
    padding: .5rem;
}
.card {
  background-color: ${(props) => props.styles.mainBG};
  color: ${(props) => props.styles.hoverLink};
  border: 0;
  border-radius: 0;
}
.card-header{
padding: 5px 10px;
}
.card-header:hover {
  border-radius: 0;
  cursor: pointer;
  background-color: ${(props) => props.styles.subBG};
}
`
export const PersonalDataForm = styled.div`
  min-width: 200px;
  span {
    margin-right: 10px;
  }
  table {
  width: 100%;
  }
  .formRow {
    display: flex;
    justify-content: space-between;
    margin: 5px;}
  textarea,
  .formBasicCheckbox {
    min-width: 204px;
  }
  input[type=checkbox] {
    border: 2px solid red;
  }
`

