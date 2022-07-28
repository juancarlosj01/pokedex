import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import pokedex from '../../assets/pokedex.svg';

const Pokemon = () => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
            res => setPokemon(res.data)
        )
    }, [])

    return (
        <>
            <div className="header-pokedex">
                <div className="bg-header-1"></div>
                <img src={pokedex} alt="pokemon" onClick={()=>navigate('/pokedex/')}/>
                <div className="pokedex-header"><div></div></div>
                <div className="bg-header-2"></div>
            </div>
            <div className="container-pokemon">
                <div className="pokemonsCard">
                    <div className="pokemonsCardImage">
                        <img src={pokemon.sprites?.other.home.front_default} alt="pokemons" />
                    </div>
                    <div className="pokemonCardBody">
                        <div className="text-center">
                            <div className="pokemon-id">#{pokemon?.id}</div>
                            <h3><b>{pokemon.name?.toUpperCase()}</b></h3><br />
                            <hr />
                            <div className="pokemon-weight">
                                <div>
                                    <small>Weight</small><br />  <b>{pokemon.weight}</b>
                                </div>
                                <div>
                                    <small>Height</small><br />  <b>{pokemon.height}</b>
                                </div>
                            </div><hr />
                            <small>Type</small><br />
                            {pokemon.types?.map(type => {
                                return (
                                    <span className="span-type" key={type?.slot}> {type.type.name} </span>
                                )
                            })}
                            <br />
                            <small>Abilities</small><br />
                            {pokemon.abilities?.map(ability => {
                                return (
                                    <span className="span-type" key={ability.ability.url}> {ability.ability.name} </span>
                                )
                            })}
                        </div>
                        <hr />
                        <div className="pokemonCardFooter">
                            <div>
                                <div>
                                    <small>Hp</small><br />  <b>{pokemon.stats?.[0].base_stat}</b>
                                </div>
                                <div>
                                    <small>Attack</small><br />  <b>{pokemon.stats?.[1].base_stat}</b>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <small>Defense</small><br />  <b>{pokemon.stats?.[2].base_stat}</b>
                                </div>
                                <div>
                                    <small>Speed</small><br /> <b>{pokemon.stats?.[5].base_stat}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pokemonsMoves">
                    <h1>Movements</h1>
                    <div>
                        {pokemon.moves?.map(move => {
                            return (
                                <span key={move.move.url}> {move.move.name} </span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokemon;