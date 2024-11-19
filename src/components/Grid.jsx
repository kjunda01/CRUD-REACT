import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Table, Th, Thead, Tr, Td, Tbody } from "../styles/Styles";
import { API_URL } from "../service/api";
import axios from "axios";

const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleDelete = async (id) => {
        const confirmar = window.confirm(
            "Tem certeza que deseja excluir o item?"
        );
        if (confirmar) {
            try {
                await axios.delete(API_URL + `/usuarios/${id}.json`);
                const newArray = users.filter((user) => user.id !== id);
                setUsers(newArray);
                toast.success("Usuário removido com sucesso!");
            } catch (error) {
                toast.error("Erro ao remover usuário");
            }
        }
    };

    const handleEdit = (objeto) => {
        setOnEdit(objeto);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th>Fone</Th>
                    <Th>Nascimento</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item) => (
                    <Tr key={item.id}>
                        <Td>{item.nome}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.fone}</Td>
                        <Td>{item.dataDeNascimento}</Td>
                        <Td>
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td>
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;
