import { useEffect } from "react"
import { getGifs } from "../helpers/getGifs"



export const GifGrid = ({ category }) => {

    // const [counter, setCounter] = useState(10)

    useEffect(() => {
        getGifs(category)


    }, [])




    return (
        <>
            <h3>{category}</h3>
            {/* <p>Hola Mundo</p>
            {
                gifs.map((gif) => (
                    <p>{gif}</p>
                ))
            } */}
        </>
    )

}
