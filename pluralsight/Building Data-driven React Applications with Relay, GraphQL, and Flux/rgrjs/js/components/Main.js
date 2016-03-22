import React from "react";
import Relay from "react-relay";

import Link from "./Link";

class Main extends React.Component {
    render() {
        let links = this.props.store.links.map(link => {
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
                # fetch 5 links
                links {
                    _id,
                    ${Link.getFragment('link')}
                }
            }`
    }
});

export default Main;
