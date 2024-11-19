import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Form from "./components/Form";
import Grid from "./components/Grid";
import "react-toastify/dist/ReactToastify.css";
import { Container, Title } from "./styles/Styles";
import GlobalStyle from "./styles/GlobalStyle";
import { API_URL } from "./service/api";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

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

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersArray = await getUsers();
                if (usersArray) {
                    setUsers(usersArray);
                    toast.success("Lista atualizada");
                }
            } catch (error) {
                toast.error("Erro ao carregar usuários.");
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="App">
            <Container>
                <Title>USUÁRIOS</Title>
            </Container>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} setUsers={setUsers} />
            <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
            <ToastContainer autoClose={3000} position="bottom-left" />
            <GlobalStyle />
        </div>
    );
}

export default App;
