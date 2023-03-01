import "bootstrap/dist/css/bootstrap.min.css";
import Taskpage from "./components/Taskpage";
import {connect} from "react-redux";
import {editTask,createTask,removeTask} from "./actions";

function App(props) {
  const onStatusChange = (id,status) =>{
   props.dispatch(editTask(id,{status}));
  };

  const OnCreateTask = ({title,description})=>{
    props.dispatch(createTask({title,description}))
  }


  const onRemoveTask = (id)=>{
  props.dispatch(removeTask(id))
  }

  return (
    <>
     
     <Taskpage tasks={props.tasks}
     onStatusChange={onStatusChange}
     OnCreateTask={OnCreateTask}
     onRemoveTask={onRemoveTask}
     />
    </>
  );
}

const mapStateToProps = state =>{
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
