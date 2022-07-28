import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeTrainer } from "../store/slices/trainer.slice";
import pokedex from '../../assets/pokedex.svg';

const Home = () => {
    const [trainer, setTrainer] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        dispatch(changeTrainer(trainer))
        navigate("/pokedex")
    }

    return (
        <div className="Home">
            <div className="container-home">
                <img src={pokedex} alt="pokedex" />
                <h1><b>Hello trainer!</b></h1>
                <span>Enter your name to start</span>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Your name" value={trainer} onChange={(e) => setTrainer(e.target.value)} />
                    <button>Go!</button>
                </form>
            </div>
            <div className="footer-home">
                <div className="bg-footer-1"></div>
                <div className="pokedex-footer"><div></div></div>
                <div className="bg-footer-2"></div>
            </div>
        </div>
    )
}

export default Home;