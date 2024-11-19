import axios from "axios";

export const API_URL = "https://unipark-a9b95-default-rtdb.firebaseio.com";

export const putUser = async (usuario, refreshUsers) => {
    try {
        const editUser = await axios.put(
            API_URL + `/usuarios/${usuario.id}.json`,
            {
                email: usuario.email,
                fone: usuario.fone,
                nome: usuario.nome,
                dataDeNascimento: usuario.dataDeNascimento,
            }
        );

        refreshUsers();

        toast.success("Usuário atualizado com sucesso!");
    } catch (error) {
        console.error("Erro ao editar usuário:", error);
        toast.error("Erro ao editar o usuário!");
    }
};
