    
import Task from "./Task";
import AddTask from "./AddTask";
const Tasks = ({ tasks, onDelete, onToggle,  onAdd, showTask  }) =>{

 return (
   <>

     {tasks.map((task) => (
     
       <Task key={task.id} task ={task} onDelete={onDelete} onToggle={onToggle}/>
  

     ))}
     {/* <AddTask onAdd={onAdd} /> */}
     {showTask && <AddTask onAdd={onAdd} />}
   
     
   </>
   
 );


};

export default Tasks;