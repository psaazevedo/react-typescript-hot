import * as React from "react";

import './Component2.less'

export interface Component2Props { compiler: string; }

export default class Component2 extends React.Component<Component2Props, {}> {
    render() {
        return <div><h1 className="component2">Hello2 from {this.props.compiler}!</h1></div>;
    }
}
