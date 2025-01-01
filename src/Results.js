import React from "react";
import './App.css';
import Synonyms from "./Synonyms.js"

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
                        {meaning.example === null ? null : (<p className="exampleResult"><em>E.g.: {meaning.example}</em></p>)}
                        <Synonyms synonyms={meaning.synonyms}/>
                    </div>)
            })}
            </div>;
    } else {
        return null;
    }
}