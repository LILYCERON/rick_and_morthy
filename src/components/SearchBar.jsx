import { useState } from "react";

const StyleBar = {
   display: "flex",
   flexDirection: "column",
   alignItems: "flex-end",
   width: "40vw",
   height: "2em",
   padding: "7px",
   marginBottom: "2px",
   borderBottom: "10px",
}

const StyleAdd = {
   justifyContent: "center",
   width: "5em",
   height: "5em",

}
export default function SearchBar(props) {

   const [id, setId] = useState("")

   const { onSearch } = props;

   const handleChange = (event) => {

      setId(event.target.value)

   }

   return (
      <div style={StyleBar}>
         <input style={StyleBar} onChange= {handleChange} type='search' name="searchbar" value={id} />
         <button style={StyleAdd} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
