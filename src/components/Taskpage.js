import React,{useState} from 'react';
import Tasklist from './Tasklist';
import ExportExcel from './excelExport';
import "./taskpage.css"
const TASK_STATUSES = ["Unstarted","In Progress", "Completed"]

function Taskpage(props) {

    const [cardForm,showCardForm] = useState(false);
    const [title,setTtile]= useState("");
    const [description,setDescription] = useState("");

    const onChangeTitle = (e) =>{
        setTtile(e.target.value)
    }

    const onDescriptionChange = (e) =>{
    setDescription(e.target.value);
    }

    const formToggler = ()=>{
        showCardForm(!cardForm)
    }

    const resetForm = () =>{
        setTtile("");
        setDescription("");
        showCardForm(false);
    }

    const onCreateTask = (e) =>{
        e.preventDefault();
        props.OnCreateTask({
            title,
            description
        })
        resetForm();
    }

    const renderTaskLists = () =>{
        const {tasks} = props;
        return TASK_STATUSES.map((status,id)=>{
            const statusTasks = tasks.filter((task) => task.status === status);
            console.log("target",statusTasks);
            return (
                <div className='col-md-3 card m-2 p-0' key={id}>
            <ExportExcel excelData={statusTasks} fileName={"tasks"}/>
            
                <Tasklist key={status} 
                status={status}
                tasks={statusTasks}
                onStatusChange={props.onStatusChange}
                onRemoveTask={props.onRemoveTask}
                />

                </div>
            )
        })
    }

    return (

        <div className='container my-5'>
           <div className='jumbotron py-3 bg-light px-3'>
            <div className='row'>
             <div className='col-md-2'>
                <button className='btn btn-success m-3' onClick={formToggler}>+</button>
             </div>
             <div className='col-md-10'>
                <h2 className='display-4 text-center text-uppercase'>Task manager</h2>
             </div>
            </div>
            {cardForm && (
            <form onSubmit={onCreateTask}>
             <div className='form-group my-2'>
               <input type="text" className='form-control' placeholder='Task title' onChange={onChangeTitle}/> 
            </div> 
            <div className='form-group'>
            <textarea type="text" className='form-control' placeholder="Task Description" onChange={onDescriptionChange}>
            </textarea>
            </div>  
            <button type="submit" className='btn btn-primary my-2'>Submit</button>
            </form>)}
            </div> 
            <div className='row d-flex justify-content-center position-relative flex-row' 
            style={{background:"#e9ecef"}}>{renderTaskLists()}</div>
        </div>

      
    );
};

export default Taskpage;
