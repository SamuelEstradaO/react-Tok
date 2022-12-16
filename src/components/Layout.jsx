import React from 'react';
import { LayoutContainer } from '../theme';
import Footer from './Footer';
import Header from './Header';

let Layout = (props) => {
    return <LayoutContainer>
        <nav><Header/></nav>
        <main>
            {props.children}
        </main>
        <Footer></Footer>
    </LayoutContainer>
}

export default Layout;