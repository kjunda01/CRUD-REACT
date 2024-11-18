import GlobalStyle from "./styles/GlobalStyle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { useState } from "react";

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Title = styled.h2``;

function App() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getUsers = async () => {
        try {
            const res = await fetch.get("http://localhost:8800");
            setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="App">
            <Container>
                <Title>USUÁRIOS</Title>
            </Container>
            <Form />
            <Grid />
            <ToastContainer autoClose={3000} position="bottom-left" />
            <GlobalStyle />
        </div>
    );
}

export default App;
