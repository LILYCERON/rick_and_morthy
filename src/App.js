import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';


const StyleDiv = {
   display: "flex",
   flexDirection: "column",
   justifyContent: "flex-start",
   alignItems: "center",
}


const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {

   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         console.log(data)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch(() => window.alert('¡No hay personajes con este ID!'))
   }

   const onClose = (id) => {
      const numberId = parseInt(id)
      const filteredCharecters = characters.filter((character) => {
         character.id !== numberId
      })
      setCharacters(filteredCharecters)
      console.table(filteredCharecters)

   }
   
   return (
      <div  style= {StyleDiv}>
         <h1>Rick and Morty</h1>
         <Nav onSearch={onSearch}/>
         <Cards  characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
