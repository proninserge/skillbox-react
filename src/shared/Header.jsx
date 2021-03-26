import * as React from 'react';
import { hot } from 'react-hot-loader/root';

function HeaderComponent() {
    return (
        <header>
            <h1>Hello!</h1>
            <h2>It's me</h2>
        </header>
    );
}

export const Header = hot(HeaderComponent);