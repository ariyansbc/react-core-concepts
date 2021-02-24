
import './App.css';
import React, {useEffect, useState} from 'react'


function App() {

const heros = ['robert', 'gilbert', 'hug','tom','benedict','neu','justin']
const products = [
  {name: 'PhotoShop', price: "$250"},
  {name: 'Illustrator', price: "$220"},
  {name: "Adobe Reader", price: "$180"},
  {name: "Adobe premier", price: "$230"}
];


  let person = {
    name: "Peter Parker",
    age: 29,
  }

  const style = {
    color: "#000",
    background: "coral",
    padding: "1em",
    textAlign: "center"
  }

  const herosName = heros.map(hero => {
    return hero;
  })
  

  return (
   <>
   <Users />
   <Counter />
   <ul>
    {
      heros.map(hero=> <li>{hero}</li>)
    }
    {
      products.map(product => <li>{product.name}</li>)
    }
   </ul>
   {
     products.map(pd=> <Products product={pd} /> )
   }

   {/* <Products product={products[0]} />
   <Products product={products[1]}  />
   <Products product={products[2]}  /> */}
   
    {/* <h1 style={style}>Name: {person.name}</h1>
    <h2>Age: {person.age}</h2>
    <h1 style={{color:"gray"}}>this is super heading</h1>
    <AnotherComponent name="Hero Mark" age="30" />
    <AnotherComponent name="Mr Zed" title="Writer" />
    <AnotherComponent name="Jefferson" age="20"/> */}
  
   </>
  
  );
}

export default App;


function Users() {
 const [users, setUsers] = useState([]);

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data=> setUsers(data))
 },[])

  return(
    <div>
      <h1>users</h1>
        <div style={{float: 'left',marginLeft: '15px'}}>
          <h2>Users name</h2>
            {
              users.map(user => <li>{user.name}</li>)
            }
        </div>
        <div style={{float: 'left', margin: '0 50px'}}>
          <h2>User email</h2>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </div>
      
      
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  
  // const handleIncrease = ()=> setCount(count + 1);
  
  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=> setCount(count-1)}>decrease</button>
      <button onClick={()=> setCount(count+1)}>increase</button>
    </div>
  )
}








//product component
function Products(props) {

  const productStyle ={
    border: '1px solid coral',
    borderRadius : "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "250px",
    float :'left',
    marginTop: '15px',
    marginLeft: '1em',
    padding: '15px'

  }
  const {name, price} = props.product;
 
  return(
     <div style={productStyle}>
       <h2>Name: {name}</h2>
       <h2>Price: {price}</h2>
       <button style={{padding: '10px 20px'}}>buy now</button>
     </div>
  );
}






//another component
function AnotherComponent(props) {
  console.log(props);
  return(
    <div style={{border: "2px solid brown", padding:"15px"}}>
      <h1>Name: {props.name}   {props.title}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Most popular player</h2>
     </div>
  );
}
