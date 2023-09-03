import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdOutlineDoneAll } from 'react-icons/md';
import './taskcard.css';

const Taskcard = ({ text, date, onDelete }) => {
    const formattedDate = date
    ? new Date(date).toLocaleString()
    : "No due date";

    const [isDone, setIsDone] = useState(false);

    const toggleDone = () => {
        setIsDone(!isDone);
    };

    const taskClass = isDone ? 'task-done' : '';


  return (
    <div className='card-body'> 
        <div className='card-info'>
            <p className={`task ${taskClass}`}>{text}</p>
            <p className='due-date'>{formattedDate}</p>
        </div>
        <div className='task-btns'>
            <div className='done' onClick={toggleDone}><MdOutlineDoneAll /></div>
            <div className='delete' onClick={onDelete}><RiDeleteBin5Line /></div>
        </div>
    </div>
  )
}

export default Taskcard
