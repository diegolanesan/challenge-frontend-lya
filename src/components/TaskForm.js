import { useState } from 'react'
import { 
    Flex, 
    Stack, 
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, 
    FormControl, 
    FormHelperText, 
    Heading, 
    Button, 
    } from "@chakra-ui/react"
import useFacts from '../hooks/useFacts'


const TaskForm = ({textAction, taskAction, task, isOpen, setIsOpen, isEditing}) => {
    const {facts} = useFacts()
    const [newTask, setnewTask] = useState({
        description: "",
        status: false,
    })
    const [factsNum, setFactsNum] = useState(0)

    const handleTask = (e) => {
        setnewTask({
            ...newTask,
            [e.target.name]: e.target.value,
        })
    }

    const handleFacts = (e) => {
        setFactsNum(e)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        taskAction(newTask, e, facts, factsNum, task.description)
        setIsOpen(!isOpen)
    }
   
    return (
        <Flex 
            direction="column" 
            w={{base: '80%', md: "40%", xl:"auto"}}
            align="center"
            mx="auto" 
            p={8} 
            bg="white" 
            rounded="xl"
        >
            <Heading> {textAction} </Heading>
            <form onSubmit={onSubmit}>
                <Stack p={8} spacing={4}>
                    <FormControl>
                        <Input type="text" name="description" placeholder={task.description} onChange={handleTask} />
                        <FormHelperText> Ingresa una descripción </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <NumberInput defaultValue={0} min={0} max={50} onChange={handleFacts} isDisabled={isEditing ? isEditing : false}>
                            <NumberInputField/>
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper/>
                            </NumberInputStepper>
                        </NumberInput>
                        <FormHelperText>O frases aleatorias sobre 🐶🦊 </FormHelperText>
                        <FormHelperText fontSize={12} fontStyle="italic"> (Se creará una tarea por frase) </FormHelperText>
                    </FormControl>
                    <Stack direction="row" spacing={4} justify="space-between">
                        <Button 
                            onClick={() => setIsOpen(!isOpen)} 
                            colorScheme="red" 
                            rounded="lg"
                        > 
                            Cancel 
                        </Button>
                        <Button type="submit" colorScheme="green" rounded="lg"> {textAction} </Button>
                    </Stack>
                </Stack>
            </form>
        </Flex>
    )
}

export default TaskForm