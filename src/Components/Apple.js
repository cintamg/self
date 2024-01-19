import React, { useEffect, useState } from 'react'
import NewsItems from "./NewsItems"

export default function Apple() {

    const [data,setData] = useState([]);

    useEffect( () => {
        const fetchData = async() => {
            const url = "https://newsapi.org/v2/everything?q=apple&from=2024-01-16&to=2024-01-16&sortBy=popularity&apiKey=7e8f5c53d3a74ea4ace232887fc95760";
            const response = await fetch(url);
            const result = await response.json();
            setData(result.articles);
        };
        fetchData();
    },[]);

  return (
    <div className="container">
        <h1 className='text-center my-5'>Apple News</h1>
        <div className="row">
        {
            data.map((element,index) => {
                return(
                    <div className="col-md-4" key={index}>
                        <NewsItems author={element.author} title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0, 88)+"...":""} textUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"data:image/png;base64,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"} />
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
