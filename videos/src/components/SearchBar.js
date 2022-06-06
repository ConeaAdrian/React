import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });   //permite schimbare
  };

  onFormSubmit = event => {
    event.preventDefault();   //nu permite la pagine refresh

    // TODO: Make sure we call
    // callback from parent component

    this.props.onFormSubmit(this.state.term); 
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}   //schimbare in Search bar
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
