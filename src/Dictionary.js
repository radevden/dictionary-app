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
    
    function handleImagesResponse(response){
        console.log(response.data);
    }

    function handleSubmit (event){
        event.preventDefault();

        let apiKey = "e1c36520c14f56fa74b8fob3tcc313d4"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let imagesUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`;
        axios.get(imagesUrl).then(handleImagesResponse);
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