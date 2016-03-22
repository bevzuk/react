import React from "react";
import ReactDOM from "react-dom";
import Relay from "react-relay";

import Main from "./components/Main.js";

class HomeRoute extends Relay.Route {
    static routeName = "Name";
    static queries = {
        store: (Component) => Relay.QL`
            query Main {
                store { ${Component.getFragment('store')} }
            }
        `
    };
}

ReactDOM.render(
    <Relay.RootContainer
        Component={Main}
        route={new HomeRoute()}
    />,
    document.getElementById("react")
);
