/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Dialog_items.module.css';
import Dialog_item from './Dialog_item/Dialog_item';

let dialogs = [
  {
    name: "Volodya",
    surname: "Putler",
    author_id: "1",
  },
  {
    name: "Louis",
    surname: "Suarez",
    author_id: "2",
  },
  {
    name: "Evgen",
    surname: "Bajenov",
    author_id: "3",
  },
  {
    name: "Alexander",
    surname: "Pushkin",
    author_id: "4",
  },
  {
    name: "Bari",
    surname: "Alibasov",
    author_id: "5",
  }
]

let dialogs_elements = dialogs.map(d => <Dialog_item name={d.name} surname={d.surname} id={d.author_id} />)
const Dialog_items = () => {
  return (
    <div className={s.dialog_items}>
      {dialogs_elements}
    </div>
  )
}

export default Dialog_items;