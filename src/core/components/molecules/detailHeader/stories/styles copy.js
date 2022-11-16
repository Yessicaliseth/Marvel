import styled, {css} from 'styled-components';

export const DetailHeaderStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid ${props => props.color ? `${props.color}` : 'var(--green)'};
    button{
        height: 30px;
        font-family: 'Ramabhadra', sans-serif;
        font-weight: 100;
    }
`