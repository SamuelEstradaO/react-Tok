import React from "react";
import { Link } from "react-router-dom";
import styled, {css} from "styled-components";

let linkStyle = css`
    font-size: 0.8em;
`;

let Example = styled.div`
    height: 200px;
    transition: all 0.2s;
    padding: 50px;
    background-color: ${({theme})=> theme.colors.dark};
    & a{
        color: purple;
    }

    &.important{
        background-color: yellow;
    }
    & > div {//nietos directos

    }
`;
let Button = styled.button`
    border: solid 1px red;
    background-color: transparent;
    outline: 0;
    font-size: 1em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
    border-radius: 2px;
    ${linkStyle}
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
    .important &{//condicionar a que el padre tenga una clase
        background-color: pink;
    }
`

let HomePage = (props) => {
    return (
        <Example >
            <PrimaryButton>Enviar</PrimaryButton>
            <Button>Cancelar</Button>
            <AppInput/>
        </Example>
    )
}

export default HomePage;