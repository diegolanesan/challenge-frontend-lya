import { useState, useEffect } from 'react'
import {getPhrases} from '../helpers/getPhrases'

const useFacts = () => {
    const [facts, setFacts] = useState([])
    useEffect(() => {
        getPhrases()
        .then(facts => {
            setFacts(facts)
        })
    }, [])

    return {facts, setFacts}
}

export default useFacts
