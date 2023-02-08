import React from 'react'
import BlockPageHeader from '../components/BlockPage'
import BlogHeader from '../components/BlogHeader'
import Catch from '../components/Catch'
import Content from '../components/Content'
import { useState, useEffect } from 'react'



const HomePage = () => {
  const [article, setArticles] = useState([]);

    useEffect(()=>{
      fetch('http://172.25.27.106:3000/article')
      .then(data=>data.json())
      .then(data=>setArticles(data));
      
  },[])

  return (
<>
        <BlockPageHeader  article={article}/>
        <Content article={article} />
        <Catch />
        
</>
  )
}

export default HomePage