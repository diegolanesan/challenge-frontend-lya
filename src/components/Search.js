import {Input} from '@chakra-ui/react'

const Search = ({searchValue, setSearchValue}) => {
    
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    
    return (
        <Input type="text" placeholder="Busca una tarea" onChange={handleChange} w="95%"/>
    )
}



export default Search
