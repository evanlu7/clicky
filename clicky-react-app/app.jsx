
function Header (props) {
	return(	
		<div className="header">
<h1>{props.title}</h1>
	</div>
		);
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
}

var Counter = React.createClass({
	propTypes: {
		intialScore: React.PropTypes.number.isRequired,

	},

	getInitialState: function () {
		return {
			score: this.props.initialScore,
		}
	},

	incrementScore: function(){
		this.setState({
			score: (this.state.score + 1),
		});
	},

	render: function () {
		return(
		<div className="counter">
			<div className="counter-score"> {this.state.score} </div>
			<button className="counter-action increment" onClick={this.incrementScore}> + </button>
		</div>
		);
	}
});


function Player (props){
	return(

		<div className="player">
				<div className="player-name">
			{props.name}
				</div>
			<div className="player-score">
				<Counter initialScore={props.score} />
			</div>
			</div>

		);
}

Player.propTypes = {
	name:React.PropTypes.string.isRequired,
	score:React.PropTypes.number.isRequired,

}



function Application (){
	return(
<h1>Clicky Game</h1>


		<div className="images">
		</div>
		<div className="player-score">
		</div>
		<div className="counter">
		</div>
		<div className="counter-score"> 0 
		</div>
		);
}

Application.propTypes = {
	title: React.PropTypes.string,
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired,
		id: React.PropTypes.number.isRequired,})).isRequired,
};

Application.defaultProps = {
	title:"Scoreboard"
}

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));


ReactDOM.render(<Application />, document.getElementById('container'));

