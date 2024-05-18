import { getGifs } from "../helpers/getGifs"



export const GifGrid = ({ category }) => {

    getGifs(categor

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
