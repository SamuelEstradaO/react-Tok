import React from 'react';
import { ClearButton } from '../theme';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/user';

let LogOutButton = props => {
    let dispatch = useDispatch();
    let logOutUser = () => {
        dispatch(
            logOut()
        )
    }
    return(
        <ClearButton className={props.className} onClick={logOutUser}>
            Cerrar sesión
        </ClearButton>
    )
}

export default LogOutButton;