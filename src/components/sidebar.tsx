import React, { useCallback, useEffect, useState } from 'react'
import styled from "styled-components"
import { FiSearch } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { getCharacters } from '../state/actions/character.action'
import { debounce } from '../utils/debounce'
import { TextInputContainer } from '../styles'
import { BACKSPACE_KEY, useKeyboardKey } from '../utils/useKeyboardKey'

const SidebarContainer = styled.div`
    padding: 10px;
`

const SelectContainer = styled.select`
    width: 100%;
    height: 40px;
    padding: 6px;
    border-radius: 6px;
`

const Sidebar = () => {
    const [characterName, setCharacterName] = useState<string>('')
    const [status, setStatus] = useState<string>('stat')
    const [gender, setGenderFilter] = useState<string>('gen')
    const dispatch = useDispatch()

    const fetchFilteredResult = (name?: string) => {
        dispatch(
            // @ts-ignore
            getCharacters({
                status: status !== "stat" && status,
                gender: gender !== "gen" && gender,
                name
            })
        )
    }

    const filterByName = useCallback((name: string) => {
        if (name.length > 2) {
            debounce(() => {
                // use when testing the app err handling
                // fetchFilteredResult(name)

                // @ts-ignore
                dispatch(getCharacters({ name }))
            })()
        }
    }, [])

    // watches changes in select fields
    useEffect(() => {
        fetchFilteredResult(characterName)
    }, [gender, status])

    useEffect(() =>
        filterByName(characterName), [characterName, filterByName]
    );

    useKeyboardKey({
        keyMatch: BACKSPACE_KEY,
        callback: () => {
            if ( characterName.length <= 1) {
                fetchFilteredResult()
            }
        }
    })

    // NOTE: A check needs to created to ensure filter fields are not used with their default fields e.g unknown.. It'd have been better if the API accepted a default like `all`  

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
                <option value="stat" disabled hidden>
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
                <option value="gen" disabled hidden>
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