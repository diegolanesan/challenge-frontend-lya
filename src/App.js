import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Task from './components/Task'
import Search from './components/Search'
import TaskForm from './components/TaskForm'
import Modal from './components/Modal'
import useTasks from './hooks/useTasks'
import { AiOutlinePlus } from 'react-icons/ai'


function App() {
  const {
    searchValue, 
    setSearchValue, 
    searchedTasks, 
    addTask,  
    completeTask, 
    editTask,
    deleteTask,
    isOpen,
    setIsOpen,
   } = useTasks()
  
  return (
    <Flex
      direction="column" 
      align="center" 
      w={{base: '90%', md: '80%', xl:"50%"}} 
      mx="auto"
    > 
      <Header>
        <Heading> Mis tareas </Heading>
        <Button 
          onClick={() => setIsOpen(true)}
          leftIcon={<AiOutlinePlus/>} 
          colorScheme="green" 
          bg="green.500" 
          rounded="lg"
          
        > 
          Crear 
        </Button>
      </Header>
      
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Tasks>
        {searchedTasks.length === 0 && <Text align="center" fontSize="xl">Sin tareas pendientes</Text>}

        {searchedTasks && searchedTasks.map((task) => {
          return <Task 
            key={task.description} 
            task={task} 
            editTask={editTask}
            onComplete={() => completeTask(task.description)} 
            onDelete={() => deleteTask(task.description)}  
          />
          })
        }
      </Tasks>

      {!!isOpen && <Modal>
        <TaskForm textAction="Crear una tarea" taskAction={addTask} task="" isOpen={isOpen} setIsOpen={setIsOpen}/>
      </Modal>
      }

    </Flex>
  )
}

export default App;
