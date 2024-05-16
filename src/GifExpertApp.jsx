import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
        console.log(newCategory)
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
                currentCategories={categories}
            />

            {/* Listado de Gifs */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>

            {/* Gif Item */}
        </>
    )
}
