import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: blue;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    box-sizing: border-box;
`;

export const Label = styled.label`
    color: white;
`;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;

    &:hover {
        background-color: #1a5bb8;
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;

    margin: 20px auto;
    word-break: break-all;
    box-sizing: border-box;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        display: none;
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        display: none;
    }
`;

export const Tbody = styled.tbody``;

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`;
