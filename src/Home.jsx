import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

let Example = styled.div`
    height: 200px;
    transition: all 0.2s;
    padding: 50px;
    
    & a{
        color: purple;
    }
`;
let Button = styled.button`
    border: solid 1px red;
    background-color: transparent;
    outline: 0;
    font-size: 1em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
    border-radius: 2px;
`;

let PrimaryButton = styled(Button)`
    background-color: red;
    border: 0;
`;

let AppLink = styled(Link)`
    text-decoration: underline;
    font-weigth: bold;
    text-transform: uppercase;
`;

let AppInput = styled.input.attrs((props)=> {
    return {
        type: props.type? props.type : 'text'
    }
})`
    border: solid 1px red;
`

let HomePage = (props) => {
    return (
        <Example>
            <AppInput type='email' placeholder="Escribe tu nombre" required></AppInput>
            <AppLink to='/videos'/>
        </Example>
    )
}

export default HomePage;