import React, { useEffect, useState } from 'react'
import NewsItems from "./NewsItems"

export default function Tech() {

    const [data,setData] = useState([]);

    useEffect( () => {
        const fetchData = async() => {
            const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7e8f5c53d3a74ea4ace232887fc95760";
            const response = await fetch(url);
            const result = await response.json();
            setData(result.articles);
        };
        fetchData();
    },[]);

  return (
    <div className="container">
        <h1 className='text-center my-5'>TechCrunch</h1>
        <div className="row">
        {
            data.map((element,index) => {
                return(
                    <div className="col-md-4" key={index}>
                        <NewsItems author={element.author} title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0, 88)+"...":""} textUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F62976bdd7ec76b82fb21fcf5.png&tbnid=BleudVMb6WsTUM&vet=12ahUKEwik1siDwueDAxV7j2MGHTaBCiQQMygSegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Ftech-companies%2Ftechcrunch-white-logo&docid=-dOB7paxXYeyCM&w=1024&h=375&q=TechCrunch%20logo%20png&ved=2ahUKEwik1siDwueDAxV7j2MGHTaBCiQQMygSegQIARB1"} />
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}