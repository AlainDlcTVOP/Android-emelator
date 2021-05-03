import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };
    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>
                <CardSection />
                <CardSection />
                <CardSection >
                    <Button>
                        KOM IGEN LOGGA IN DÅ
                    </Button>
                </CardSection>
            </Card>

        );
    }
};

export default LoginForm;