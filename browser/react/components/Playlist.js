import React from 'react';
import Songs from './Songs'

export default class Playlist extends React.Component {

  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    const getAllSongs = this.props.getAllSongs;
    getAllSongs();
    selectPlaylist(playlistId);
  }
  componentWillReceiveProps(nextProps){
    const playlistId = nextProps.routeParams.playlistId;
    const selectPlaylist = nextProps.selectPlaylist;
    if (this.props.routeParams.playlistId !== nextProps.routeParams.playlistId){
          selectPlaylist(playlistId);
    }
  }
  render(){
    const playlist = this.props.selectedPlaylist;

    return (
    <div>
      <h3>{ playlist.name }</h3>
       <div className="well">
        <form className="form-horizontal" noValidate name="songSelect">
          <fieldset>
            <legend>Add to Playlist</legend>
            <div className="form-group">
              <label htmlFor="song" className="col-xs-2 control-label">Song</label>
              <div className="col-xs-10">
                <select className="form-control" name="song">
                {this.props.allSongs.map(song=>{
                  return(<option value={song.id} key={song.id} >{song.name}</option>)
                })
                }
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">Add Song</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
      <hr />

    </div>)

  }
}
