import { DELETE_TASK, EDIT_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";
const initialState = [
    // {
    //     id:1,
    //     title:"learn Reactjs",
    //     description: "Let's learn React js today",
    //     status:"Unstarted",
    // },
    // {
    //     id:2,
    //     title:"learn Redux",
    //     description: "Let's learn React js today",
    //     status:"In Progress",
    // },
    // {
    //     id:2,
    //     title:"learn mern",
    //     description: "Let's learn React js today",
    //     status:"Completed",
    // },
];

const tasks = (state = {tasks : initialState},action)=>{
    // if(action.type ===EDIT_TASK){
    //     const {payload } = action;
    //     return {
    //         tasks: state.tasks.map(task =>{
    //             if(task.id===payload.id){
    //                 return Object.assign({},task,payload.params)
    //             }
    //             return task;
    //         })
    //     }
    // }

    const {payload}= action;

    switch(action.type){
      case EDIT_TASK:{
        return {
                    tasks: state.tasks.map((task) =>{
                        if(task.id===payload.id){
                            return Object.assign({},task,payload.params)
                        }
                        return task;
                    })
                }
      }
    case CREATE_TASK:{
     return {
        tasks: state.tasks.concat(action.payload)
     }
    }

    case DELETE_TASK:{
     return {
     tasks: state.tasks.filter(task=>task.id !==action.id)
     }
    }

   default: return state;
}
}; 
export default tasks;