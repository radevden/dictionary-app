import React from "react";

export default function Synonyms(props){
   return (<div>
    {props.synonyms === null ? null : (<ul className="synonyms">Similar:{props.synonyms.map(function(synonym, index){
        return (<li key={index} className="synonymList">{synonym}</li>)
    })}</ul>)}
   </div>)
}
