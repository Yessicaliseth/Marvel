import styled, {css} from 'styled-components';

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const MainCharacterStyle = styled.div`
    padding: 30px 50px;
    background-color: var(--black-bg);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    display: grid;
    grid-template-rows: 62px 40px 73px 50px auto 1fr;
    row-gap: 15px;
    .rigth{
        justify-self: end;
    }
    .bottom{
        align-self: end;
    }
    .date{
        font-family: 'Ramabhadra', sans-serif;
        font-weight: 200;
    }
`