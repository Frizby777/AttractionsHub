import "./style.css";
import search from "./../../img/icons/search.svg";

const Search = () => {
    return (
        <>
            <div className="input-button-container">
                <button type="button"><img src={search} /></button>
                <input type="text" className="search" placeholder="Поиск..." />
            </div>
        </>
    )
}

export default Search;