import React from "react";
import './App.css';

export default function Results(props){
    console.log(props.results);
    if(props.results) {
        return <div className="results">
                    <div className="searchedWord">
                        <h1>{props.results.word}</h1>
                        <h3>{props.results.phonetic}</h3>
                    </div>
            {props.results.meanings.map(function(meaning,index){
                return (
                    <div key={index} className="searchedResults">
                        <h3><strong>{meaning.partOfSpeech}</strong></h3>
                        <p>{meaning.definition}</p>
                        {meaning.example === null ? null : (<p><em>E.g.: {meaning.example}</em></p>)}
                    </div>)
            })}
            
            </div>;
    } else {
        return <p><i>What are you looking for?</i></p>;
    }
}