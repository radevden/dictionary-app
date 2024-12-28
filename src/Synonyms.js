import React from "react";

export default function Synonyms(props){
   return (<div>
    {props.synonyms === null ? null : (<ul>Synonyms:{props.synonyms.map(function(synonym, index){
        return (<li key={index}>{synonym}</li>)
    })}</ul>)}
   </div>)
}
