import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const noykes =["salman","Rajak","alomgir","jasim","bappy","subo","karom"] 

const products =[
  {name:'photoshop',price:'$90.00'},
  // {name:'Illustrator',price:'$60.00'},
  // {name:'PDF Reader',price:'$6.00'},
  // {name:'Premmiere Pro',price:'$25.00'}

]


const productNames = noykes.map(noyk => noyk)

 
// 
function App() {


  // ////

  return (
    <div className="App">
      <header className="App-header">
    {/*  */}

    {
        products.map(pd => <Product product={pd}></Product> )
    }
{/* ffffff */}

    

    <User></User>
    <ul>
    {
     noykes.map(noyke => <li>{noyke}</li>)
    }
    <br></br>
    {
      products.map( product => <li>{product.name } = { product.price}</li> )
    }
    </ul>
    {/*  */}
    {
      products.map( product => <li>{product.name } = { product.price}</li> )
    }

    <Counter></Counter> 
 
    <Testuser></Testuser>
    </header>
    </div>
    
  );  
}

// ///11111
  function User(){
    const [users,setUser] = useState([]);
    useEffect(()=>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))

    },[])

    return(
      <div>
        <h1>Dynamic User :{users.length}</h1>
        <ol>
        {
          users.map( user => <li> {user.email}</li>)

        }
        </ol>
        
       
      </div>

    );
  }



// ///11111



function Counter(){
  const [count , setcount] = useState(0);
  
  return(
    <div>
      <h2>count :{count}</h2>
      <button onClick={()=> setcount(count + 1)}>incress</button>
      <button onClick={()=> setcount(count - 1)}>incress</button>

    </div>

  )



}

////
function Testuser(){
  const[aduser,setuser2] = useState([])
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>setuser2(data))

  },[])

  return(
    <div>
      <h3>user details :{aduser.length} </h3>
      <ol>
        {
         aduser.map( usert =><li>{usert.title}</li>)
         
        }
        {
          console.log(aduser)
        }
      </ol>
    </div>
  )

}

///2222
function Product(props){
  const productStyle= {
  
    border:'1px solid gray',
    borderRadius :'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    float:'left',
    color:'black',
    textTransform:'uppercase',
    margin:'10px'   
  }

  return (
    <div style={productStyle}>

      <h2>{props.product.name}</h2>
      <p>Lorem, ipsum dolor sit amet consectetur .</p>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>

    </div>
  
  )
}
// 




export default App;
