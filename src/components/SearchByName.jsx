import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePokemons } from "../store/slices/pokemons.slice";

const SearchByName = () => {
    const dispatch = useDispatch()
    const [pokemonName, setPokemonName] = useState("")

    const submit = (e) => {
        e.preventDefault()
        const pokemon = [{
            'url': `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}/`,
        }]
        dispatch(updatePokemons(pokemon))
        setPokemonName("")
    }

    return (
        <div>
            <form onSubmit={submit} className="searchSelect">
                <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} placeholder="Enter pokemon name" required />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchByName;