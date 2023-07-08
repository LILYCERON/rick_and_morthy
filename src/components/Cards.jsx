import Card from './Card';

const StyleCards={
   display: "flex",
   margin: "10px"
}

export default function Cards(props) {
   const { characters, onClose } = props
   return <div style={StyleCards}> {
      characters.map(({ id, name, status, species, gender, origin, image }) => {
         return <Card 
            key={id}
            name={name} status={status} species={species} gender={gender} origin={origin.name} image={image} onClose={onClose} />
      })
   }</div>
}