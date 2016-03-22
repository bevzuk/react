import React from "react";
import Relay from "react-relay";

class Link extends React.Component {
    render() {
        return  <li>
            <a href={this.props.link.url}>{this.props.link.title}</a>
        </li>;
    }
}

class Main extends React.Component {
    static defaultProps = {
        limit: 3
    };

    static propTypes = {
        limit: React.PropTypes.number
    };

    render() {
        let links = this.props.store.links.slice(0, this.props.limit).map(link => {
            return <Link key={link._id} link={link}/>;
        });

        return (
            <div>
                <h3>Links</h3>
                <ul>
                    {links}
                </ul>
            </div>
        );
    }
}

Main = Relay.createContainer(Main, {
    fragments: {
        store: () => Relay.QL`
            fragment on Store {
                links {
                    _id,
                    title,
                    url
                }
            }`
    }
});

export default Main;
