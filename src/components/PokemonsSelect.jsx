import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { updatePokemons } from "../store/slices/pokemons.slice";

const PokemonsSelect = () => {
    const dispatch = useDispatch()
    const [pokemonsType, setPokemonstype] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/').then(
            res => setPokemonstype(res.data.results)
        )
    }, [])

    const pokemonsFiltered = e => {
        e.target.value == '' ?
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200').then(
                res => dispatch(updatePokemons(res.data.results))
            ) :
            axios.get(`https://pokeapi.co/api/v2/type/${e.target.value}/`).then(
                res => dispatch(updatePokemons(res.data.pokemon))
            )
    }

    return (
        <div>
            <select name="selectPokemons" id="selectPokemons" onChange={pokemonsFiltered}>
                <option value="">All pokemons</option>
                {pokemonsType.map(type => {
                    return (<option key={type.name} value={type.name}> {type.name} </option>)
                })}
            </select>
        </div>
    )
}

export default PokemonsSelect;