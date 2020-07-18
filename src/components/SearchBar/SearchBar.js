import React from 'react';
import './SearchBar.css';
import { render } from '@testing-library/react';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortByOptions: 'best_match'
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange =this.handleLocationChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
  }

  
  }
    getSortByClass(sortByOption){
      if (this.state.sortBY === sortByOption) {
        return 'active';
      } else {
        return '';
      }
    }
    handleSortByChange(sortByOption){
      this.setState({ sortBy: sortByOption })
    }

    handleTermChange(event) {
      this.setState({ term: event.target.value })
    }
  
    handleLocationChange(event){
      this.setState({ location: event.target.value })
}    
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>{sortByOption} </li>
        })
    }
    render() {
        return (
            <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange()} />
    <input placeholder="Where?" onChange={this.handleLocationChange()} />
  </div>
  <div className="SearchBar-submit">
    <a href='www.#.com'>Let's Go</a>
  </div>
</div>
        )
    }
}

export default SearchBar;