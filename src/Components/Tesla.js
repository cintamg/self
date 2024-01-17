import React, { useEffect, useState } from 'react'
import NewsItems from "./NewsItems"

export default function Tesla() {

    const [data,setData] = useState([]);

    useEffect( () => {
        const fetchData = async() => {
            const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-12-17&sortBy=publishedAt&apiKey=7e8f5c53d3a74ea4ace232887fc95760";
            const response = await fetch(url);
            const result = await response.json();
            setData(result.articles);
        };
        fetchData();
    },[]);

  return (
    <div className="container">
        <h1 className='text-center my-5'>Tesla News</h1>
        <div className="row">
        {
            data.map((element,index) => {
                return(
                    <div className="col-md-4" key={index}>
                        <NewsItems author={element.author} title={element.title} description={element.description} textUrl={element.url} imageUrl={element.urlToImage} />
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
