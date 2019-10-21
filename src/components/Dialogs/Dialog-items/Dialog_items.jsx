/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Dialog_items.module.css';
import Dialog_item from './Dialog_item/Dialog_item';

const Dialog_items = (props) => {
  let dialogs_elements = props.dialogs
  .map(d => <Dialog_item name={d.name} surname={d.surname} id={d.author_id} />)
  return (
    <div className={s.dialog_items}>
      {dialogs_elements}
    </div>
  )
}

export default Dialog_items;