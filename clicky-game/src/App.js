import React, { Component } from "react";
import Card from "./components/Cards/card"
import Wrapper from "./components/wrapper/wrapper.js";
import Header from "./components/Header/header"
import bandOfBrothers from "./bandOfBrothers.json";

class App extends Component {
  state = {
    bandOfBrothers,
    clickedIds: [],
    score: 0,
    highScore: 0,
    goal: 12,
  }

  scoreBoardFunction = id => {
    let clickedIds = this.state.clickedIds;

    if (clickedIds.includes(id)) {
      this.setState({ clickedIds: [], score: 0});
      alert("Game Over! You loss!")
      return;
    } else {
      clickedIds.push(id)

      if (clickedIds.length === 12) {
        this.setState({ score: 12, clickedPuppyIds: [] })
        alert("You Won!");
        console.log('You Win');
        return;
      }

      this.setState({ bandOfBrothers, clickedIds, score: clickedIds.length, status: " " });

      for (let i = bandOfBrothers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [bandOfBrothers[i], bandOfBrothers[j]] = [bandOfBrothers[j], bandOfBrothers[i]];
      }
    }
  }

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Wrapper>
          {bandOfBrothers.map((brother, index) => {
            return (
              <Card
                scoreBoardFunction={this.scoreBoardFunction}
                id={brother.id}
                name={brother.name}
                image={brother.image} />
            )
          })}
        </Wrapper>
      </div>
    )
  }
}

export default App;