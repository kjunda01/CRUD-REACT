import React, { useState, useEffect } from "react";
import {
    Button,
    FormContainer,
    Input,
    InputArea,
    Label,
} from "../styles/Styles";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../service/api";

const Form = ({ onEdit, setUsers, setOnEdit }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");
    const [nascimento, setNascimento] = useState("");

    useEffect(() => {
        if (onEdit) {
            setNome(onEdit.nome);
            setEmail(onEdit.email);
            setFone(onEdit.fone);
            setNascimento(onEdit.dataDeNascimento);
        }
    }, [onEdit]);

    const getUsers = async () => {
        try {
            const response = await axios.get(API_URL + "/usuarios.json");

            const usersArray = Object.keys(response.data).map((id) => ({
                id,
                ...response.data[id],
            }));

            return usersArray;
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    const handleSaveUser = async (evento) => {
        evento.preventDefault();

        const usuario = {
            nome,
            email,
            fone,
            dataDeNascimento: nascimento,
        };

        try {
            if (onEdit) {
                await axios.put(
                    API_URL + `/usuarios/${onEdit.id}.json`,
                    usuario
                );
                toast.success("Usuário atualizado com sucesso!");
            } else {
                await axios.post(API_URL + "/usuarios.json", usuario);
                toast.success("Usuário adicionado com sucesso!");
            }

            const updatedUsers = await getUsers();
            setUsers(updatedUsers);

            setNome("");
            setEmail("");
            setFone("");
            setNascimento("");

            setOnEdit(null);
        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
            toast.error("Erro ao salvar o usuário!");
        }
    };

    return (
        <FormContainer>
            <InputArea>
                <Label>Nome:</Label>
                <Input
                    name="nome"
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                />
            </InputArea>

            <InputArea>
                <Label>E-mail:</Label>
                <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                />
            </InputArea>

            <InputArea>
                <Label>Telefone:</Label>
                <Input
                    name="fone"
                    value={fone}
                    onChange={(evento) => setFone(evento.target.value)}
                />
            </InputArea>

            <InputArea>
                <Label>Data de Nascimento:</Label>
                <Input
                    name="data_nascimento"
                    type="date"
                    value={nascimento}
                    onChange={(evento) => setNascimento(evento.target.value)}
                />
            </InputArea>

            <Button type="submit" onClick={handleSaveUser}>
                {onEdit ? "ATUALIZAR" : "SALVAR"}
            </Button>
        </FormContainer>
    );
};

export default Form;
