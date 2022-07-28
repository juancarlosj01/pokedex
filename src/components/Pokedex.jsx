import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePokemons } from "../store/slices/pokemons.slice";
import PokemonCard from "./PokemonCard";
import PokemonsSelect from "./PokemonsSelect";
import SearchByName from "./SearchByName";
import PaginationSelect from "./PaginationSelect";
import pokedex from '../../assets/pokedex.svg';

const Pokedex = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const maxPages = useSelector((state) => state.pagination)
    const trainer = useSelector((state) => state.trainer)
    const allPokemons = useSelector((state) => state.pokemons)
    const [pages, setPages] = useState([1])
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200').then(
            res => {
                dispatch(updatePokemons(res.data.results))
            }
        )
    }, [])

    const getPaginate = () => {
        if (allPokemons.length > maxPages) {
            const allPages = []
            const total = Math.ceil(allPokemons.length / maxPages)
            for (let i = 1; i <= total; i++) {
                allPages.push(i)
            }
            setPokemons([...allPokemons].slice(0, maxPages))
            setPages(allPages)
        } else {
            setPages([1])
        }
    }

    const next = (index, page) => {
        setPokemons([...allPokemons].slice(index * maxPages, page * maxPages))
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        getPaginate()
        next(0, 1)
    }, [allPokemons, maxPages])

    return (
        <div>
            <div className="header-pokedex">
                <div className="bg-header-1"></div>
                <img src={pokedex} alt="pokemon" onClick={()=>navigate('/pokedex/')}/>
                <div className="pokedex-header"><div></div></div>
                <div className="bg-header-2"></div>
            </div>
            <div className="container-pokedex">
                <span className="span-welcome"> Welcome {trainer}, </span> <span> here you can find your favorite pokemon</span><br />
                <div className="container-search">
                    <SearchByName />
                    <PokemonsSelect />
                </div>
                <div className="pokemonsContainer">
                    {pokemons.map(pokemon => {
                        return (<PokemonCard key={pokemon.url ? pokemon.url : pokemon.pokemon.url} url={pokemon.url ? pokemon.url : pokemon.pokemon.url} />)
                    })}
                </div>
                <div className="page-buttons">
                    {pages.map(page => {
                        return (
                            <div className="page" key={page} onClick={() => next(pages.indexOf(page), page)}>
                                <b>{page}</b>
                            </div>
                        )
                    })}
                </div>
                <PaginationSelect />
            </div>
        </div>
    )
}
export default Pokedex;