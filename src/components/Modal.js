import ReactDOM from 'react-dom'
import {Flex} from '@chakra-ui/react'

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <Flex 
        align="center"
        w="100%"
        h="100%" 
        position="fixed" 
        top="0"
        bg="rgba(100,100,100,0.4)"
>
      {children}
    </Flex>
   ,document.getElementById("modal")
  )
}

export default Modal
