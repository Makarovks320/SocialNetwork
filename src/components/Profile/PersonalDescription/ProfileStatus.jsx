import React from 'react';


class ProfileStatus extends React.Component {
  state ={
    editMode: false
  }
  activateEditMode = () => { // стрелочная функция, чтобы не передать контекст, когда передадим этот метод в обработчик onclick
    console.log(this)
    this.setState({
      editMode: true
    })  
  }
  deactivateEditMode = () => { // стрелочная функция, чтобы не передать контекст
    this.setState({
      editMode: false
    })  
  }
  render() {
  return (
    <>
    {!this.state.editMode &&
    <div>
      <span onClick = {this.activateEditMode}>{this.props.status}</span>
    </div>
    }
    {this.state.editMode &&
    <div>
      <input autoFocus={true} onBlur={this.deactivateEditMode} value = {this.props.status} />
    </div>
    }
    </>
  )
}
}

export default ProfileStatus;