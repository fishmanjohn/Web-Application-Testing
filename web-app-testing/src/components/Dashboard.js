//record strikes balls hits fouls and strikes.
// user records activity of player at bat 
import React from 'react';




function Dashboard (props) {
return (

    <div>
        <button onClick={props.handleStrike}>Strike</button>
        <button onClick={props.handleBalls}>Ball</button>
        <br/>
        <button onClick = {props.handleFoul}>Foul</button>
        <button onClick = {props.handleHit}>Hit/Out</button>

    </div>
)

}
export default Dashboard