import { device } from 'core/const/device';
import styled, { css } from 'styled-components';

const LargeStyles = css`

`;

const MediumStyles = css`
`;

const SmallStyles = css`
`;

export const CardAvatarContainer = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    transform:translateY(-90px);
`

export const CardAvatarStyle = styled.div`

    position:relative;
    width: 180px;
    height: 180px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    backdrop-filter: blur(6px);

    &::after{
        content:"";
        width: 100%;
        height: 100%;
        background-color: var(--gray-font);
        position: absolute;
        opacity: .45;
        border-radius: 50%;
        z-index: -1;
    }

`

export const AvatarStyle = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--black-dark-bg);
    z-index: 3;
    border-radius: 50%;
    display: grid;
    place-items: center;
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
