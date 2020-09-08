import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import LoginStyle, { ImageContainer, Input, Field, Button } from "./styles";
import { Text18Regular, Text22Bold, Text18SemiBold } from "../../components/Text";

import logoImg from "../../assets/logo.png";

import api from '../../services/api';
import { salvar_id } from '../../services/auth'

function Login({history}) {

    const [login, setLogin] = useState();
    const [Users, setUsers] = useState([]);

    useEffect(() => {

        api.get(`/users/`)
            .then(res => {
                setUsers(res.data)
            })

    }, []);


    function handleInputChange(event) {

        const { value } = event.target;

        setLogin(value);
    }

    function logIn() {
        let nomes = Users.map(user => user.name);
        if(!nomes.includes(login)){
            return;
        }
        let eu = Users.find(user => user.name===login);
        salvar_id(eu._id);
        history.push('../')
    }

    return (
        <LoginStyle>
            <div />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ImageContainer>
                    <div>
                        <img src={logoImg} alt="LiberAí" />
                    </div>
                    <Text18Regular style={{ textTransform: "capitalize" }}>
                        A liberdade financeira na sua mão
                    </Text18Regular>
                </ImageContainer>

                <Container style={{ display: 'flex', flex: 1, marginBottom: 50, marginTop: 10, justifyContent: 'space-evenly' }}>
                    <Text22Bold style={{alignSelf:'center', fontSize:40}}>Login</Text22Bold>

                    <Field>
                        <label htmlFor="login"><Text18SemiBold>Seu Nome</Text18SemiBold></label>
                        <Input
                            type="text"
                            name="login"
                            id="login"
                            onChange={handleInputChange}
                        />

                    </Field>
                    <Button onClick={() => logIn()}>Logar</Button>
                    <Button onClick={() => history.push('../cadastro')}>Fazer Cadastro</Button>
                </Container>
            </div>
            <div />
        </LoginStyle>
    );
}

export default Login;
