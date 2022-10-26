import React from 'react';
import CardList from './CardList';
import axios from 'axios';
import { useEffect } from 'react';




const test = () =>{
  // const result =  axios.get("http://localhost:3000/")

  axios.get("https://murmuring-dawn-50624.herokuapp.com/msg/9")
  .then(res => {
    console.log(res)
  }).catch(err => {
    console.error(err)
  })
}

axios.post("http://localhost:3000/msg", {msg: "Hello", id:1},{
  headers: {
    'Authorization': 'admin',    
  },
})
.then(res=>{
  console.log(res)
}).catch(err =>{
  console.error(err)
})

function App() {
  useEffect(() =>{
    test()
  },[])
  return (
    <div className="App">
      <header className="App-header bg-red-500">
      {/* <Card name={"kavya"}/> */}
      <CardList/>
      
    
      </header>
    </div>
  );
}

export default App;
