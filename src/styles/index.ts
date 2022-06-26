import styled from "styled-components";

export const Button = styled.button`
    height: 40px;
    font-size: 16px;
    width: ${(props: { width?: string }) => props.width};
    color: ${(props: { color?: string }) => props.color};
    border: 1px solid ${(props: { color?: string }) => props.color};
    &:hover {
        cursor: pointer;
    }
`

// @ts-ignore
export const Text = styled.p`
    font-size: ${(props: { text?: string }) => props.text};
`

export const UlList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: ${(props: { flexDirection: string }) => props.flexDirection};
`

export const ListItem = styled.li`
    background: ${(props: { color: string }) => props.color};
`

export const TextInputContainer = styled.form`
    height: 45px;
    width: 95%;
    border: 1px solid #000;
    border-radius: 30px;
    padding: 0 6px;
    display: flex;
    align-items: center;
    background: #fff;

    span {
        font-size: 20px;
        padding-right: 6px; 
    }

    input {
        border: 0;
        height: 30px;
        width: 100%;
        margin-right: 6px;
        font-size: 16px;

        &:focus {
            outline: 0px;
       };
    }

    &:hover {
        cursor: pointer;
    }
`

export const SelectContainer = styled.select`
    width: 100%;
    height: 40px;
    padding: 6px;
    border-radius: 6px;
`
