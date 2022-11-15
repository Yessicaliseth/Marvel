import { device } from 'core/const/device';
import styled, {css} from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    position: sticky;
    top: 350px;
    backdrop-filter: blur(10px);
    &::after{
        content:"";
        position: absolute;
        background-color: var(--black-dark-bg);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: .7;
        z-index: -1;
    }
`



export const ImgCharacter = styled.div`
    background-image: ${props => props.src ? `url(${props.src})` : ``} ;
    background-repeat: no-repeat;
    background-size: cover;
    width:${props => props.size ? `${props.size}px` : '50px'};
    height:${props => props.size ? `${props.size}px` : '50px'};
    border-radius:50%;
`



const LargeStyles = css`
`;
const MediumStyles = css`
    padding: 0 30px;
`;
const SmallStyles = css`
    padding: 0 ;
`;

export const SectionSearchResultStyle = styled.div`
    padding: 0 60px;
    @media ${device.desktop} {
      ${LargeStyles}
    }

    @media ${device.laptop} {
      ${MediumStyles}
    }

    @media ${device.mobile} {
      ${SmallStyles}
    }
`

export const ResultStyle = styled.div`
    background-color: var(--black-dark-bg);
    padding: 60px;
    display: grid;
    gap: 30px;
    @media ${device.mobile} {
        padding: 20px;
    }
`