import React from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

class Jokes extends React.Component {
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    return (
      <ul>
        {this.props.jokes.map((joke, i) => {
          return (
            <div  key={i}>
              <div>Joke {i}:</div>
              <li>{joke.setup}</li>
              <li>{joke.punchline}</li>
            </div>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
  }
}

export default connect(mapStateToProps, { getJokes })(Jokes);