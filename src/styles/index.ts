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