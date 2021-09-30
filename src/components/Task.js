import {useState} from 'react'
import { HStack, Text, Button } from '@chakra-ui/react'
import Modal from '../components/Modal'
import TaskForm from '../components/TaskForm'
import { MdDone, MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const Task = ({task, onComplete, editTask, onDelete}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    
    const onEdit = () => {
        setIsOpen(true)
        setIsEditing(true)
    }

    return (
        <HStack m={2} justify="space-between" align="center" w="95%" mx="auto">
            <HStack align="center" spacing={2}>
                <Button 
                    onClick={onComplete} 
                    p={1} rounded="full" 
                    colorScheme="green" 
                    color="white"
                > 
                    <MdDone/> 
                </Button>
                <Text 
                    style={{textDecoration: !!task.status ? 'line-through' : 'none'}}
                    px={2}
                > 
                    {task.description} 
                </Text>
            </HStack>
           
            <HStack>
                <Button 
                    onClick={onEdit}
                    p={1} 
                    rounded="full" 
                    colorScheme="blue" 
                    bg="blue.700" 
                    color="white"> 
                        <MdEdit/> 
                </Button>
                <Button 
                    onClick={onDelete}
                    p={1} 
                    rounded="full" 
                    colorScheme="red" 
                    color="white"
                > 
                    <FaTrash/>
                </Button>
            </HStack>
            
            {!!isOpen && <Modal>
                <TaskForm textAction="Editar tarea" taskAction={editTask} task={task} isOpen={isOpen} setIsOpen={setIsOpen} isEditing={isEditing} />
            </Modal>
            }
        </HStack>
    )
}

export default Task
