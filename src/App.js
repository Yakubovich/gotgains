import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    let SETS = 3;
    let REPS = 5;
    let stages = [ { weight: 0, reps: 5 }, { weight: .6, reps: 5 }, { weight: .7, reps: 5 }, { weight: .8, reps: 1 } ];
    this.state = {
      totalWeight: 145,
      stage: -1,
      warmups: this.howManyWarmups(stages),
      stages: stages
    }
    for (var set = 0; set < SETS; set++) {
      this.state.stages.push({ weight: 1, reps: REPS});
    }
  }

  howManyWarmups (stages) {
    for (var i = 0; i < stages.length; i++) {
      if (stages[i].weight == 1)
        return i;
    }
    return stages.length;
  }

  nextStage() {
    if (this.state.stage < this.state.stages.length - 1) 
      this.setState({ stage: this.state.stage + 1 });
  }

  stageDetails() {
    var weight = this.state.stages[this.state.stage].weight;
    var reps = this.state.stages[this.state.stage].reps;
    weight = weight > 0 ? weight * this.state.totalWeight : 45;
    return { weight: weight, reps: reps};
  }

  instructions() {
    var percent = this.state.stages[this.state.stage].weight;
    var reps = this.state.stages[this.state.stage].reps;
    var english = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    var weightInstruct, repInstruct;
    if (percent == 0)
      weightInstruct = "with an empty bar";
    else if (percent == 1)
      weightInstruct = "with full weight";
    else
      weightInstruct = "with " + (percent * 100) + " percent weight";

    repInstruct = english[reps-1] + (reps == 1 ? " rep" : " reps");

    return repInstruct + " " + weightInstruct;
  }

  buttonText() {
    var stage = this.state.stage;
    if (stage == -1)
      return "Start Warmup";
    else if (stage == this.state.warmups - 1)
      return "Start First Set";
    else if (stage < this.state.warmups - 1)
      return "Next Warmup";
    else 
      return "Next Set";
  }

  headerText() {
    var english = ["first", "second", "third", "4th", "5th", "6th", "7th", "8th", "9th"];
    var stage = this.state.stage;
    if (stage == -1)
      return "Warmup";
    else if (stage == this.state.warmups)
      return "First Set";
    else if (stage < this.state.warmups)
      return "Warmup";
    else if (this.areWeDone())
      return "Last Set";
    else
      return english[stage - this.state.warmups] + " Set";
  }

  areWeDone() {
    return this.state.stage == this.state.stages.length - 1;
  }
  
  areWeStarted() {
    return this.state.stage > -1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
	  {!this.areWeStarted() ? 
	  <div>
            <input type="text"
	           value={this.state.totalWeight}
	           onChange={ (a)=>this.setState({ totalWeight: a.target.value }) } />
            <span className="lbs"> lbs</span>
          </div>
	  : ""}
	  {this.areWeStarted() ? <h1>{this.headerText()}</h1> : ""}
	  {this.areWeStarted() ? this.instructions() : ""}
          {this.areWeStarted() ? <BarWithWeight totalWeight={this.stageDetails().weight} /> : ""}
	  {!this.areWeDone() ? <button onClick={ this.nextStage.bind(this) } >{this.buttonText()}</button> : ""}
        </header>
      </div>
    );
  }
}

function BarWithWeight(props) {
  var barWeight = 45;
  var availablePlates = [ 45, 25, 10, 5, 2.5 ];
  var smallestPlate = smallestInArray(availablePlates); 
  var selectedPlates = [];
  var weight = props.totalWeight - barWeight;

  var i = 0;
  while (weight >= smallestPlate * 2) {
    var plate = availablePlates[i];
    if (weight >= plate * 2) {
      selectedPlates.push(plate);
      weight -= plate * 2;
    } else {
      i++;
    }
  }

  return (
    <div className="weighted-bar">
      <div className="bar"></div>
      {selectedPlates.reverse().map((plate,i) => { return <div className="plate" weight={plate} key={"left" + i}>{plate}</div>})}
      <div className="gap"></div>
      {selectedPlates.reverse().map((plate,i) => { return <div className="plate" weight={plate} key={"right" + i}>{plate}</div>})}
    </div>
  );
}

function smallestInArray(ar) {
  var smallest = ar[0];
  for (var i = 1; i < ar.length; i++) 
    if (ar[i] < smallest)
      smallest = ar[i];
  return smallest;
}


export default App;
