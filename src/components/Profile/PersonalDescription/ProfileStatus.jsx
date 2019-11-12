import React from 'react';


class ProfileStatus extends React.Component {
  state ={
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => { // стрелочная функция, чтобы не передать контекст, когда передадим этот метод в обработчик onclick
    this.setState({
      editMode: true
    })
    console.log(this.state.status)
    console.log(this.props.status)
  }
  deactivateEditMode = () => { // стрелочная функция, чтобы не передать контекст
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
    console.log(this.state.status)
    console.log(this.props.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    }) 
  }
  render() {
  return (
    <>
    {!this.state.editMode &&
    <div>
      <span onClick = {this.activateEditMode}>{this.props.status || 'No status'}</span>
    </div>
    }
    {this.state.editMode &&
    <div>
      <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value = {this.state.status} />
    </div>
    }
    </>
  )
}
}

export default ProfileStatus;