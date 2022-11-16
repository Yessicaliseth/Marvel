import styled, {css} from 'styled-components';

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 0 45px 45px 45px;
`
export const SubHeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const SectionLayout = styled.div`
    background-color: var(--black-dark-bg);
    height: calc(100vh - 200px);
    overflow-y: scroll;
`