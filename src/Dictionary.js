import React, { useState } from "react";
import './App.css';

export default function Dictionary (){
    let [word, searchWord] = useState(null);
    
    function handleSubmit (event){
        event.preventDefault();
        console.log();
        alert(`Searching for ${word}`);
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