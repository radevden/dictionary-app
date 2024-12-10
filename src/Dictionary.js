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
    
    function handleSubmit (event){
        event.preventDefault();

        let apiKey = "e1c36520c14f56fa74b8fob3tcc313d4"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function displaySearch (event){
        searchWord(event.target.value);
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input className="search" type="search" onChange={displaySearch}></input>
            <input className="submit" type="submit" value="Submit"></input>
        </form>
        <Results results={results} />
        </div>);
}