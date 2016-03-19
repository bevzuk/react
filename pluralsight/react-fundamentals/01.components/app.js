(function () {
    'use strict';

    var Quiz = React.createClass({
        //getDefaultState: function() {};
        //getDefaultProps: function() {};
        //propTypes: - validate property type
        propTypes: {
            books: React.PropTypes.array.isRequired
        },
        render: function() {
            return <div>
                {this.props.books.map(function(book) {
                    return <Book title={book} key={book}></Book>;
                })}
            </div>;
        }
    });

    var Book = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired
        },
        render: function() {
            return <div><h4>{this.props.title}</h4></div>;
        }
    });

    ReactDOM.render(
        <Quiz books={['The lord of the rings', 'War and Peace']}/>,
        document.getElementById('container')
    );
})();