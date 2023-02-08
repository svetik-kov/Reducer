import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const tasksReducer=(state:TaskType[],action:ActionType)=>{
  switch (action.type){
      case "REMOVE-TASK":{
          return state.filter(t=>t.id!==action.payload.id)
      }
      case "ADD-TASK":{
          let task = { id: v1(), title: action.payload.title, isDone: false }
          return [task,...state]
      }
      default: return state
  }
}
type ActionType=RemoveTaskACType|AddTaskACType

type RemoveTaskACType=ReturnType<typeof removeTaskAC>
export const removeTaskAC=(id: string)=>{
    return {
       type:'REMOVE-TASK',
       payload: {id}
    } as const
}

type AddTaskACType=ReturnType<typeof addTaskAC>
export const addTaskAC=(title: string)=>{
    return {
        type:'ADD-TASK',
        payload: {
            title}
    } as const
}