import React, {useState,useEffect} from 'react'
import axios from "axios";


const Headlines = () => {
    const [currentNews, setCurrentNews] = useState([]);
    useEffect(()=>{
        const fetchNews = async ()=>{
            let getNews = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=478103364fe54ef1a36a2bb9cbdf06d2")
            setCurrentNews(getNews.data.articles)
            console.log(getNews.data.articles)
        }
        fetchNews()
    },[])
  return (
    <div>
        <h1 className=' mt-5 mx-10 text-2xl md:text-left '>Top Headlines</h1>
      <div className='grid md:grid md:grid-cols-4 sm:mx-auto mx-4 my-4'>
        {
            currentNews.map((curElem, index)=>{
                return(
                  <div className='mx-4 my-4 shadow-md 'key={index}>
                    <div className= " max-w-lg max-h-96 " >
                    <img src={!curElem.urlToImage ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYLYvkE5dk9DzvSLJX1ZYjqopJ9w6ArtNiw&usqp=CAU" : curElem.urlToImage} alt="" />
                    <h3 className='text-gray-700 mt-2'>{curElem.title ? curElem.title.slice(0,100):""}</h3>
                    
                    <a href={curElem.url} target="_blank" rel="noopener noreferrer" className='text-[#f18a3b] text-sm flex justify-start mt-2 mb-1 px-3 '>READ MORE &#8674;</a>
                </div>
                </div>
                )
            })
        }
       
      </div>
    </div>
  )
}

export default Headlines
