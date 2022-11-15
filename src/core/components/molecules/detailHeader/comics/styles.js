import styled, {css} from 'styled-components';

export const DetailHeaderComicsStyle = styled.div`
    display: flex;
    padding: 15px;
    gap: 30px;
    align-items: center;
    border-bottom: 1px solid ${props => props.color ? `${props.color}` : 'var(--purple)'};
`