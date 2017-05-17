import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class PlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputValue: "", disabled: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (evt) {
    const value = evt.target.value;
    if (value.length <= 16 ||  value.length >= 0){
      this.setState({
      inputValue: value,
      disabled : false
      });
    }
    else this.setState({disabled : true});
  }
  handleSubmit(evt){
    console.log(this.state.inputValue);
    this.setState({inputValue: ""});
    evt.preventDefault();
  }
  render(){
    const inputValue = this.state.inputValue;
    return(<div>
    <NewPlaylist disabled={this.state.disabled} inputValue={this.state.inputValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    </div>)

  }
}
