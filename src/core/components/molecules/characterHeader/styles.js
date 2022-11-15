import { device } from 'core/const/device';
import styled, { css } from 'styled-components';

const LargeStyles = css` 
`;

const MediumStyles = css`
    gap: 10px;
    .center{
        justify-self: center;
    }
`;

const SmallStyles = css`
    height: 300px;
    .center{
        justify-self: center;
    }
`;

export const CharacterHeaderStyle = styled.div`
    height: 100%;
    display: grid;
    .rigth{
        justify-self: end;
    }
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