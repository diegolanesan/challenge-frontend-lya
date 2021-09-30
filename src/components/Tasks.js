import { Flex } from '@chakra-ui/react'

const Tasks = ({children}) => {

    return (
        <Flex direction="column" w="100%" my={12}>
            {children}
        </Flex>
    )
}

export default Tasks
