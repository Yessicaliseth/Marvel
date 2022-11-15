import styled, {css} from 'styled-components';

export const CardResultStyle = styled.div`
    display: grid;
    grid-template-columns:auto auto 1fr;
    background-color: var(--black-font);
    padding: 15px 30px;
    align-items: center;
    column-gap: 15px;
    cursor:pointer;

    .right{
        justify-self: end;
        opacity: 0;
    }

    &:hover{
        .right{
            opacity: 1;
        }
    }

    .circle{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--gray-font);
    }
`