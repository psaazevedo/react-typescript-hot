import * as React from "react";
import Component1 from "./components/Component1";

export default class App extends React.Component<any, any> {
    render() {
        return (
            <Component1 framework="Typescript" compiler="React2" />
        );
    }
}