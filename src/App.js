import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';
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


 const indexofLastPost=currentpage*postsperpage;
 const indexofFirstPost=indexofLastPost-postsperpage;
 const currentposts=posts.slice(indexofFirstPost,indexofLastPost);
 
 const paginate=(number)=>{
   Setcurrentpage(number);
 }
  return (
    <div className='container mt-5'>
     <h1 className="text-primary mb-5">My Blog</h1>
     <Posts posts={currentposts} loading={loading}/>
     <Pagination totalposts={posts.length} postsperpage={postsperpage} paginate={paginate}/>
    </div>
  );
}

export default App;
