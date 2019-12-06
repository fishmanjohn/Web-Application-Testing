import React from 'react';



function Display (props) {
return (

    <div>
        <h2>Balls: {props.balls}</h2>
        <h2>Strikes: {props.strike}</h2>

    </div>
)
}
export default Display