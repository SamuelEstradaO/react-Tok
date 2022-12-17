import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AppInput from "../components/AppInput";
import { signUp } from "../store/user";
import { AppButton } from "../theme";
import UserFormLayout from "./UserFormLayout";
import { useNavigate } from "react-router-dom";

let SignUp = (props) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    let onSubmit = async (data) => {
        await dispatch(signUp({ credentials: data }))
        navigate('/videos');
    }
    return (
        <UserFormLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppInput type="email"  register={register('email')} label="Correo electrónico" />
                <AppInput type="text"  register={register('username')} label="Nombre de usuario" />
                <AppInput type="password" register={register('password')} label="Contraseña" />
                <AppButton type="submit" small>Crear cuenta</AppButton>
            </form>
        </UserFormLayout>
    )
}

export default SignUp;
