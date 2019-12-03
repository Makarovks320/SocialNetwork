import React, { useState, useEffect } from 'react';


const ProfileStatusWithHook = (props) => {
  let [editMode, setEditMode] = useState(false); //присваивание деструктуризацией
  const activateEditMode = () => { 
    setEditMode(true)
  }
  const deactivateEditMode = () => { 
    setEditMode(false)
    props.updateStatus(status)
  }

  let [status, setStatus] = useState(props.status); 
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  useEffect( () => {
    setStatus(props.status);
  }, [props.status])

  return (
    <>
    {!editMode &&
    <div>
      <span onClick = { props.isOwner && activateEditMode}>{status || 'No status'}</span>
    </div>
    }
    {editMode && props.isOwner && 
    <div>
      <input class="form-control" autoFocus={true} onChange={onStatusChange} value={status} onBlur={deactivateEditMode}/>
    </div>
    }
    </>
  )
}

export default ProfileStatusWithHook;