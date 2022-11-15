import { device } from 'core/const/device';
import styled, { css } from 'styled-components';

const LargeStyles = css`

`;

const MediumStyles = css`
    flex-direction: column;
`;

const SmallStyles = css`
    flex-direction: column;
`;

export const SectionDetailCharacterStyle = styled.section`
    width: 100%;
    padding: 0 60px;
    height: calc(100vh - 200px);
    top: 200px;
    position: absolute;
    min-height: calc(100vh - 300px);
    @media ${device.desktop} {
      
    }

    @media ${device.laptop} {
        padding: 0 30px;
    }

    @media ${device.mobile} {
        padding: 0;
    }
`

export const DetailStyle = styled.div`
    position: relative;
    background-color: var(--black-dark-bg);
    width: 100%;
    height:auto;
    height: 100%;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 700px 1fr;
    

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