import * as React from 'react';
import { Modal } from 'semantic-ui-react';

import Component1 from './components/Component1';

export default class App extends React.Component<any, any> {

    constructor() {
        super();
        this.state = { name: 'React', open: false };
        this.test();
    }

    delay(milliseconds: number) {
        return new Promise<void>(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    async test() {
        await this.delay(2000);

        this.setState({ name: 'Async react', open: true});
    }

    onModalClose = () => {
        this.setState({ open: false });
    }

    closeModal = (accept: boolean) => () => {
        this.setState({ open: false, result: accept.toString()});
    }

    render() {

        return (
            <div>
                <Component1 framework='Typescript' compiler={this.state.name} />
                <Modal size='small' open={this.state.open} onClose={this.onModalClose}>
                <Modal.Header>
                    Delete Your Account
                </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <button onClick={this.closeModal(true)} className='ui positive button'>Approve</button>
                    <button className='ui button'>Neutral</button>
                    <button onClick={this.closeModal(false)} className='ui negative button'>Cancel</button>
                </Modal.Actions>
                </Modal>
                <span>{this.state.result}</span>
            </div>
        );
    }
}
