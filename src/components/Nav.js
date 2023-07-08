import SearchBar from "./SearchBar";

function Nav(props){

    const{onSearch}= props

    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;