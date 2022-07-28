import { updateLimitPagination } from "../store/slices/pagination.slice";
import { useDispatch } from "react-redux";

const PaginationSelect = () => {
    const dispatch = useDispatch()

    const updatePagination = (e) => {
        dispatch(updateLimitPagination(e.target.value))
    }

    return (
        <div className="selectPaginate">
            <select name="paginate" id="paginate" onChange={(e) => updatePagination(e)}>
                <option value="20">Default</option>
                <option value="4">4 pokemons</option>
                <option value="8">8 pokemons</option>
                <option value="12">12 pokemons</option>
                <option value="16">16 pokemons</option>
                <option value="20">20 pokemons</option>
            </select>
        </div>
    )
}

export default PaginationSelect;