import React, { useState } from "react";
import './App.css';
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary (){
    let [word, searchWord] = useState(null);
    let [results, setResults] = useState(null);
    
    function handleResponse(response){
            setResults(response.data);
    }
    
    function handlePexelsResponse(response){
        console.log(response.data);
    }

    function handleSubmit (event){
        event.preventDefault();

        let apiKey = "e1c36520c14f56fa74b8fob3tcc313d4"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApi = "VZy5kWaJYQWL61SU0tnv1gKLYmhl4dSkPxeKqrbGAXmGUZq1xjjOfBv4";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
        let headers = { Authorization: `Bearer ${pexelsApi}` };
        axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse).catch((error) => console.error("Pexels API Error:", error));
    }

    function displaySearch (event){
        searchWord(event.target.value);
    }
    
    return (
        <div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input className="search" type="search" placeholder="type a word" onChange={displaySearch}></input>
                <input className="submit" type="submit" value="Submit"></input>
            </form> 
            <small className="example">i.e.: moon, travel, wine</small>
        </div>
        <Results results={results} />
        </div>);
}