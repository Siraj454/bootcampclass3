import React from "react";
function Fav(props) {
    return (
        <div>
            <h1>I LIKE TO PLAY {props.GAMES}</h1>
            <h2>I LIKE TO EAT {props.FOOD }</h2>
            <h3>I LIKE TO {props.STUDY}</h3>

        </div>
    );
    export default Fav;

}