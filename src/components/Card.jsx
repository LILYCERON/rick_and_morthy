const StyleCard = {
   display: "flex",
   flexDirection: "column",
   backgroundColor: "#c5c5c5a2",
   justifyContent: "space-around",
   paddingLeft: "0px",
   listStyle: "none",
   borderRadius: "10%",
   margin: "10px"
}

const StyleButton = {
   borderRadius: "10px",
   padding: "10px",
width: "80px",
   alignSelf: "center",
   marginBottom: "10px",
   backgroundColor: "#fcff4f",
   font: "small-caps bold 15px/1 serif",
}

const StyleImage = {
   backgroundColor: "#fcff4f",
   padding: "0.7em",
   margin: "5px",
   borderRadius: "10%",
   width:"150px",
   height: "170px",
   
}

export default function Card(/* { name, status, species, gender, origin, image, onClose } */ props) {
   return <ul style={StyleCard}>
      <img style={StyleImage} src={props.image} alt={props.name} />
      <li>{props.name}</li>
      <li>{props.status}</li>
      <li>{props.species}</li>
      <li>{props.gender}</li>
      <li>{props.origin.name}</li>
      <button style={StyleButton} onClick={() => props.onClose(props.id)}>X</button>
   </ul>
}