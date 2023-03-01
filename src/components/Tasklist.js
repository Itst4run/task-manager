import React from 'react';
import Task from './Task';
// import ExportExcel from './excelExport';
function Tasklist(props) {
    // console.log(props.tasks,"target")
    return (
        <div>
            <div className='card-header text-uppercase text-center font-weight-bold'>
            {props.status}
            {/* <ExportExcel excelData={props.tasks} filename={"tasks"}/> */}
            </div>
            {props.tasks.map((task)=>(
              <Task key={task.id} task={task} 
              onStatusChange={props.onStatusChange}
              onRemoveTask={props.onRemoveTask}

              />  
            ))}
        </div>
    )
}

export default Tasklist
