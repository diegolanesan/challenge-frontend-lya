import { Flex } from '@chakra-ui/react'

const Header = ({children}) => {
    return (
        <Flex 
            direction="row" 
            p={8} w="100%" 
            justify="space-between" 
            align="center"
        >
            {children}
        </Flex>
    )
}

export default Header
