import React, { useState } from "react";
import './App.css';
import axios from "axios"

export default function Dictionary (){
    let [word, searchWord] = useState(null);
    
    function handleResponse(response){
            console.log(response);
    }
    
    function handleSubmit (event){
        event.preventDefault();
        console.log();
        alert(`Searching for ${word}`);

        let apiKey = "e1c36520c14f56fa74b8fob3tcc313d4"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function displaySearch (event){
        searchWord(event.target.value);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={displaySearch}></input>
            <input type="submit" value="Submit"></input>
        </form>);
}