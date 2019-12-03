import styled from 'styled-components'

export const PersonalData = styled.div`
.personalDataContainer {
  display: flex;
  align-items: flex-start;
  min-height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid ${(props)=>props.styles.mainBorder};
  border-radius: 10px;
  background-color: ${(props)=>props.styles.mainBG};
  color: ${(props)=>props.styles.hoverLink};
}

.avatar {
  border: 2px solid ${(props)=>props.styles.mainBorder};
  margin-right: 10px;
}
.table {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${(props)=>props.styles.hoverLink};
}
.table caption {
  text-align: left;
  color: ${(props)=>props.styles.hoverLink};
}

.table td:first-child {
 width: 250px;
 color: ${(props)=>props.styles.mainLink};
}
`
export const FileChooser = styled.div`
  .container {
    overflow: hidden;
    display: block;
    margin-right: 10px;
    position: relative;
    color: ${(props)=>props.styles.mainText};
    text-align: right;
    text-align: center;
}

.container [type=file] {
    cursor: pointer;
    display: block;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.container:hover {
  color: ${(props)=>props.styles.hoverLink};
}
`