import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class PlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputValue: "", disabled: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange (evt) {
    const value = evt.target.value;
    if (value.length <= 16 && value.length > 0){
      this.setState({
      inputValue: value,
      disabled : false
      });
    }
    else this.setState({disabled : true, inputValue : value});
  }
  handleSubmit(evt){
   const addPlaylist = this.props.addPlaylist;
   addPlaylist(this.state.inputValue);
   this.setState({inputValue: ""});
   evt.preventDefault();
  }
  render(){
    const inputValue = this.state.inputValue;
    let warning = null;
    if (this.state.disabled && inputValue.length === 0  ){
      warning = <div className="alert alert-warning">Please enter a name</div>
    }
    return(<div>
    {warning}
    <NewPlaylist disabled={this.state.disabled} inputValue={this.state.inputValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    </div>)

  }
}
