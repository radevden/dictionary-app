import React from "react";
import './App.css';

export default function Results(props){
    console.log(props.results);
    if(props.results) {
        return <div className="results">
            <h2>{props.results.word}</h2>
            {props.results.meanings.map(function(meaning,index){
                return (
                    <div key={index} className="meaning">
                        <h3><strong>{meaning.partOfSpeech}</strong></h3>
                        <p>Definition: {meaning.definition}</p>
                        <p><em>{meaning.example}</em></p>
                    </div>)
            })}
            
            </div>;
    } else {
        return null;
    }
}