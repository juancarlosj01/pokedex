import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import notFound from '../../assets/notFound.png'

const PokemonCard = ({ url }) => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(url).then(res => setPokemon(res.data))
    }, [])

    return (
        <div className="pokemonCard" onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            {pokemon.name ?
                <>
                    <div className="pokemonCardImage">
                        <img src={pokemon.sprites?.other.home.front_default} alt="pokemons" />
                    </div>
                    <div className="pokemonCardBody">
                        <div className="text-center">
                            <span><b>{pokemon.name?.toUpperCase()}</b></span><br />
                            {pokemon.types?.map(type => {
                                return (
                                    <span className="span-type" key={type?.slot}> {type.type.name} </span>
                                )
                            })}
                            <hr />
                        </div>
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
                </>
                :
                <>
                    <div className="pokemonCardImage">
                        <img src={notFound} alt="notFound" />
                    </div>
                    <div className="pokemonCardBody">
                        <div className="text-center">
                            <span><b>Take it easy!</b></span><br />
                            <hr />
                        </div>
                        <div className="text-center">
                            <br /><span>No results....</span><br />
                            <br /><span>So, look again!</span>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default PokemonCard;