import React, { Component } from 'react';
import Bar from "./Bar";


class App extends Component {

constructor(){
    super();
    this.state = {

      movieData: ""

    };
  }

      search = async () => {

         const response = await fetch(`https://api.tvmaze.com/search/shows?q=${this.state.movieData}`);
         const data = await response.json();
         console.log(data)

}
  change = (e) => {
    this.setState({movieData:e.target.value})
  }
    //this.setState({movieData: data});



  render() {

      return (
        <div className="App">
         <Bar change ={this.change} search = {this.search}/>


        </div>
      )

}
}

export default App;
