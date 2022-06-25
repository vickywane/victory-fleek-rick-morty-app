import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import styled from "styled-components"
import { FiSearch } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { getCharacters } from '../state/actions/character.action'

const SidebarContainer = styled.div`
    border-right: 1.5px solid #000;
    padding: 10px;
`

const TextInputContainer = styled.form`
    height: 40px;
    width: 300px;
    border: 1px solid #000;
    border-radius: 30px;
    padding: 0 6px;

    display: flex;
    align-items: center;

    span {
        font-size: 16px;
        padding-right: 6px; 
    }

    input {
        border: 0;
        height: 30px;
        width: 100%;
        margin-right: 6px;
        font-size: 16px;
    }
`

const SelectContainer = styled.select`
    width: 100%;
    height: 40px;
    padding: 6px;
    border-radius: 6px;
`

const Sidebar = () => {
    const [characterName, setCharacterName] = useState<string>('')
    const [status, setStatus] = useState<string>('unknown')
    const [gender, setGenderFilter] = useState<string>('unknown')
    const dispatch = useDispatch()

    const fetchFilteredResult = (name: string) => {
        // @ts-ignore
        dispatch(getCharacters({ status, gender, name }))
    }

    const filterByName = useCallback((name: string) => {

    }, [])

    useEffect(() => {
        fetchFilteredResult(characterName)
    }, [gender, status])

    // watches changes in select fields
    useEffect(() =>
        filterByName(characterName), [characterName, filterByName]
    );

    return (
        <SidebarContainer>
            <TextInputContainer onSubmit={e => {
                e.preventDefault()
                filterByName(characterName)
            }} >
                <span>
                    <FiSearch />
                </span>
                <input
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    placeholder="Filter By Name" />
            </TextInputContainer>

            <br />

            <SelectContainer defaultValue={status} onChange={e => setStatus(e.target.value)} >
                <option value="unknown" disabled hidden>
                    Status
                </option>

                <option value='unkown' >
                    Unkown
                </option>

                <option value='alive' >
                    Alive
                </option>

                <option value='dead' >
                    Dead
                </option>
            </SelectContainer>

            <br />
            <br />

            <SelectContainer defaultValue={gender} onChange={e => setGenderFilter(e.target.value)} >
                <option value="unknown" disabled hidden>
                    Gender Filter
                </option>

                <option value='unknown' >
                    Unknown
                </option>
                <option value='male' >
                    Male
                </option>
                <option value='female' >
                    Female
                </option>
            </SelectContainer>
        </SidebarContainer>
    )
}

export default Sidebar