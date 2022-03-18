import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    SearchBook = e => {
        const querySearch = e.target.value.toString().toLowerCase();
        this.props.onsearch(querySearch);
    }

    render() {
        return (
            <input type="" placeholder="Search Book" onChange={this.SearchBook} />
        )
    }
}

export default Search;