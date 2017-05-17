import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class PlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputValue: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
    inputValue: value
    });
  }
  handleSubmit(evt){

    console.log(this.state.inputValue)
    evt.preventDefault();
  }
  render(){
    const inputValue = this.state.inputValue;
    return(<div>
    <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    </div>)

  }
}
