import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useTasks = () => {
    const {item: tasks, saveItem: saveTasks} = useLocalStorage("tasks", []) 
    const [searchValue, setSearchValue] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    
    let searchedTasks
    if (searchValue.length === 0) {
      searchedTasks = tasks
    } else {
      searchedTasks = tasks.filter(task => {
        return task.description.toLowerCase().includes(searchValue.toLowerCase())
      })
    }
    
    const addTask = (task, e, facts, factsNum) => {
      const newTasks = [...tasks]
      if(task.description) {
        newTasks.push(task)
      } 
      if (factsNum > 0) {
        const userFacts = facts.splice(0, factsNum)
        userFacts.forEach(fact => {
          newTasks.push({
            description: fact,
            status: false
          })
        })
      }
      saveTasks(newTasks)
    }

    const completeTask = (description) => {
      const taskIndex = tasks.findIndex(task => task.description === description)
      const newTasks = [...tasks]
      newTasks[taskIndex].status = true
      saveTasks(newTasks)
    }
  
    const deleteTask = (description) => {
      const taskIndex = tasks.findIndex(task => task.description === description)
      const newTasks = [...tasks]
      newTasks.splice(taskIndex, 1)
      saveTasks(newTasks)
    }

    const editTask = (task, e, facts, facstsNum, description) => {
      const taskIndex = tasks.findIndex(task => task.description === description)
      const newTasks = [...tasks]
      newTasks[taskIndex].description = e.target.description.value
      saveTasks(newTasks)
    }

    return {
        searchValue, 
        setSearchValue, 
        searchedTasks, 
        addTask, 
        completeTask,
        editTask, 
        deleteTask,
        isOpen,
        setIsOpen
    }
}

export default useTasks
