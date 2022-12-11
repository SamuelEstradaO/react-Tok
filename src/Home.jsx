import React from "react";
import styled from "styled-components";

let Example = styled.div`
    background-color: red;
    height: 200px;
    transition: all 0.2s;
`;

let HomePage = (props) => {
    return (
        <Example>
            <p>Hola mundo!</p>
        </Example>
    )
}

export default HomePage;