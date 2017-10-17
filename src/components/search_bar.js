import React, { Component } from 'react'; //const Component = React.Component


class SearchBar extends Component{ //define new class SearchBar with all the functionality React.Component has
  constructor(props) {
    super(props);
    this.state = { term: ''}
  }

  render() {
    return (
      <div className='search-bar'>
        <input
        value={this.state.term}
        placeholder="Search..."
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  // onInputChange(event) { //react event handler
  //   console.log(event.target.value);
  // }
}

//React components must have render() method
export default SearchBar;
