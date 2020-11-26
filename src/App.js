import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
function App() {
 const[posts,Setposts]=useState([]);
 const[loading,Setloading]=useState(true);
 const[currentpage,Setcurrentpage]=useState(1);
 const[postsperpage,Setpostsperpage]=useState(10);

 useEffect(()=>{

const FetchPosts=async()=>{

  const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
  Setposts(res.data);
  Setloading(false);
  console.log(res.data)
}
 FetchPosts();

 },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
