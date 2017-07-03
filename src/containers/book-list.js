import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { selectBook } from './../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
            <li key={book.title}
                className="list-group-item"
                onClick={() => this.props.selectBook(book)}
            >{book.title}
            </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // props insideBooklist
    return {
      books: state.books
    };
}

// Returns props in the Booklist container
function mapDispatchToProps(dispatch) {
    // Pass the action to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote a Booklist from a component to a container.
// The dispatch method in this example is the action 'selectBook', which will be available as props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);