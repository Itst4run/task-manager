import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TASK_STATUSES = ["Unstarted","In Progress", "Completed"]

const Task = (props) => {

    function onStatusChange(e){
        props.onStatusChange(props.task.id,e.target.value)
    }

    function onRemoveTask(){
    props.onRemoveTask(props.task.id)
    }

    return (
        <>
        <form onChange={onStatusChange}>
            <div className='d-flex align-items-center justify-content-center p-2'>
            <div style={{marginRight:"10px"}}> Move To</div>
            <select defaultValue={props.task.status}>
            {TASK_STATUSES.map((status)=>(
                <option value={status} key={status}>
                    {status}
                </option>
            ))

            }
            </select>
            </div>
          
        </form>
            {/* <h5>{props.task.status}</h5> */}
            <h2 className='card-title mt-3 text-uppercase px-2' style={{color: "#3a4"}}>{props.task.title}</h2>
            <p className='card-text mb-3 text-muted font-weight-bold px-2' >{props.task.description}</p>
            <FontAwesomeIcon icon={faTrash}
             className="float-right m-3"
             style={{cursor:"pointer"}}
             onClick={()=>onRemoveTask(props.task.id)}
             />
        </>
    )
}

export default Task
