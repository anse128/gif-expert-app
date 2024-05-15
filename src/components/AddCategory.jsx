import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch')

    // const onInputChange = (event) => {
    //     console.log(event.target.value)
    //     setInputValue(event.target.value)
    // }
    const onInputChange = ({ target }) => {
        // console.log(target.value)
        setInputValue(target.value) //evitar el refresh de la pagina
    }

    const onSubmit = (event) => {
        // console.log(event)
        event.preventDefault()
        console.log(inputValue)
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            < input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={(event) => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
    )
}
