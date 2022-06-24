import React, { useState } from 'react'
import styled from "styled-components"
import { FiSearch } from 'react-icons/fi'

const SidebarContainer = styled.div`
    border-right: 1.5px solid #000;
    padding: 10px;
`

const TextInputContainer = styled.div`
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
    const [searchText, setSearchText] = useState<string>('')
    const [statusFilter, setStatusFilter] = useState<string>('Status')
    const [genderFilter, setGenderFilter] = useState<string>('Gender Filter')

    return (
        <SidebarContainer>
            <TextInputContainer>
                <span>
                    <FiSearch />
                </span>
                <input onChange={(e) => setSearchText(e.target.value)} placeholder="Filter By Name" />
            </TextInputContainer>

            <br />

            <SelectContainer defaultValue={statusFilter} onChange={e => setStatusFilter(e.target.value)} >
                <option value="Status" disabled hidden>
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

            <SelectContainer defaultValue={genderFilter} onChange={e => setGenderFilter(e.target.value)} >
                <option value="Gender Filter" disabled hidden>
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