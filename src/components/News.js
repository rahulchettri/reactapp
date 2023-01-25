
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import React, {useEffect, useState} from 'react'

export default function News(props) {
 
 const [articles,setArticles]=useState([]);
 const [page, setPage]=useState(1);
 const [loading,setLoading]=useState(1);
 
const fetchTodos = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=85042e144967470bac7a7f92545ed2f4&pageSize=${props.psize}`);
      const data = await response.json();
      setArticles(data.articles);
  };

 
  useEffect(() => {
    fetchTodos();
  }, [])
  
         const  Updatenews= async () =>{
            setLoading(1);
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=85042e144967470bac7a7f92545ed2f4&page=${page}&pageSize=${props.psize}`);          
            const data = await response.json();
            setArticles(data.articles); 
            setLoading(0);   
            
            }
            useEffect(() => {
                Updatenews();
              }, [page])

        
              const Handlenext =  async () =>{
                setPage(page+1)
                Updatenews();
              }
             
              const Handleprev =  async () =>{
                setPage(page-1);
                Updatenews();
              }
             

  return (
    <div className="container my-3">
        <div align="center"><h2> Top Headlines</h2></div>  

        {loading>=1 && <Spinner />}
        <div className="row">

{ articles.map((item) => {    return (
    
    <>
    <div className="col-md-4" key={item.url}>
<NewsItem  title={item.title.slice(0,18)} description={item.description.slice(0,45)} imageurl={item.urlToImage} newsurl={item.url} />
</div>
</>   

)   })}
 </div> 
 

<br/>
       <div className="container d-flex justify-content-between">
       <button type="button" disabled={page<=1}  class="btn btn-dark" onClick={Handleprev}>Previous</button>
       <button type="button" class="btn btn-dark" onClick={Handlenext} >Next</button>
       </div>


      </div>
  )
}

