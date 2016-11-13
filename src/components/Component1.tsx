import * as React from 'react';

import Component2 from './Component2';

import './Component1.less';

export interface IComponentProps { compiler: string; framework: string; }

export default class Component extends React.Component<IComponentProps, {}> {

    constructor() {
        super();
    }

    render() {
        return <div>
                <h1 className='component1'>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <Component2 compiler={this.props.compiler}/>
            </div>;
    }
}
