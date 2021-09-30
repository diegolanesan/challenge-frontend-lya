import { useState, useEffect } from 'react'

const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        const localStorageItem = localStorage.getItem(itemName);
            
        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            setItem(initialValue)
        } else {
            setItem(JSON.parse(localStorageItem)) 
        }
        }, [])
    
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    
    return {item, saveItem}
}

export default useLocalStorage
