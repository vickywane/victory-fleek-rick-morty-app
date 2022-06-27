import styled from "styled-components"
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'
import { useEffect, useMemo, useState } from "react"
import { UlList } from "../styles"
import { useDispatch } from "react-redux"
import { getCharacters } from "../state/actions/character.action"
import { createPaginationRange } from "../utils/paginationRange"
import { deviceSize } from "../utils/mediaQueryBreakpoints"
import { usePageMatch } from "../utils/usePageMatch"

const Paginate = styled.div`
    display: flex;
    justify-content: flex-end;

    .pagination-container {
        border: 1px solid #7D7D80;
        border-radius: 8px;
        height: 50px;
        display: flex;
        flex-direction: row;
    }
`

const PaginationItem = styled.li`
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #7D7D80;
    border-left: 1px solid #7D7D80;
    font-size: 18px;
    background-color: ${(props: { active?: boolean }) => props.active ? "#0D99FF" : 'transparent'};
    color: ${(props: { active?: boolean }) => props.active ? "#fff" : '#0D99FF'};
    transition: all 300ms;

    &:hover {
        cursor: pointer;
        background-color: #0D99FF;
        color: #fff;
    }

    @media ${deviceSize.tablet} {
        &:hover {
            cursor: pointer;
            background-color: transparent;
            color: #0D99FF;
        }
    }
`

interface PaginatorProps {
    itemSize: number
}

const Paginator = ({ itemSize }: PaginatorProps) => {
    const isMobile: boolean = usePageMatch(deviceSize.tablet)

    const [currentPage, setPage] = useState<number>(1)
    const dispatch = useDispatch()

    const [paginators, setPaginators] = useState<[number, number]>([0, 9]) // sequence of paginator numbers

    const [paginationRange, setPaginationRange] = useState<Array<number>>(createPaginationRange(paginators[0], paginators[1]))

    const responsiveEndValue = useMemo(() => isMobile ? 3 : 9, [isMobile])

    useEffect(() => {
        if (isMobile) {
            setPaginators([0, 3])

            return
        }

        setPaginators([0, 9])
    }, [isMobile])

    useEffect(() => {
        // @ts-ignore
        dispatch(getCharacters({ currentPage }))
    }, [currentPage])

    useEffect(() => {
        if (
            currentPage === (paginationRange[0] + 1)
        ) {
            setPaginators(state => {

                return [
                    state[0] === 0 ? 0 : state[0] - responsiveEndValue,

                    state[1] === responsiveEndValue ? responsiveEndValue : state[1] - responsiveEndValue,
                ]
            })
        }

        if (currentPage === (paginationRange[paginationRange.length - 1] + 1)) {
            setPaginators(state => [

                state[0] + responsiveEndValue, state[1] + responsiveEndValue

            ])
        }
    }, [currentPage])

    useEffect(() => {
        setPaginationRange(createPaginationRange(paginators[0], paginators[1]))
    }, [paginators])

    return (
        <Paginate>
            <div className="pagination-container">
                <PaginationItem onClick={() => {
                    setPage(current => current > 1 ? current - 1 : current)
                }}
                >
                    <FiChevronsLeft />
                </PaginationItem>

                <UlList
                    flexDirection="row"
                >
                    {
                        paginationRange.map((item, index: number) => (
                            <PaginationItem
                                key={index}
                                active={(item + 1) === currentPage}
                                onClick={() => setPage(item + 1)}
                                className="pagination-item"
                            >
                                {item + 1}
                            </PaginationItem>
                        ))
                    }
                </UlList>

                <PaginationItem onClick={() =>
                    setPage(current => current < itemSize ? current + 1 : current)
                }>
                    <FiChevronsRight />
                </PaginationItem>
            </div>

        </Paginate>
    )
}
export default Paginator