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
                        <NewsItems author={element.author} title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0, 88)+"...":""} textUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fetimg.etb2bimg.com%2Fphoto%2F67988312.cms&tbnid=NNTLieDvzCrSmM&vet=12ahUKEwjo_5SmwueDAxUYqGMGHXocBvAQMygUegQIARB9..i&imgrefurl=https%3A%2F%2Fauto.economictimes.indiatimes.com%2Fnews%2Ftesla-rolls-out-sentry-mode-safety-feature%2F67988277&docid=7jybNz4alK_evM&w=377&h=377&q=Tesla%20news%20logo%20png&ved=2ahUKEwjo_5SmwueDAxUYqGMGHXocBvAQMygUegQIARB9"} />
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
