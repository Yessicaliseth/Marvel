import styled from 'styled-components';

export const WrapperMenu = styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    top: 0;
    backdrop-filter: blur(10px);
    background: #0c0c0de0;
`

export const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px;
    gap: 30px;
    align-items: center;
    border-bottom: 1px solid ${props => props.color ? `${props.color}` : 'var(--purple)'};
`