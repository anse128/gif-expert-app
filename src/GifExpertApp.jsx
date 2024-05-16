import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
        console.log(newCategory)
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
                currentCategories={categories}
            />

            {
                categories.map((category) => (
                    // <GifGrid /> react ya sabe que tiene un key = a category
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}
