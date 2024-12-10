import React from "react";
import './App.css';

export default function Results(props){
    console.log(props.results);
    if(props.results) {
        return <div className="results">
            <div className="searchedWord">
                <h2>{props.results.word}</h2>
                <h4>{props.results.phonetic}</h4>
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
        return null;
    }
}