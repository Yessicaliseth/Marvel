import { device } from 'core/const/device';
import styled, {css} from 'styled-components';

const LargeStyles = css`
    grid-template-columns:auto auto 1fr;
`;
const MediumStyles = css`
    grid-template-columns:auto auto 1fr;
`;
const SmallStyles = css`
    grid-template-rows: auto auto 1fr;
    gap: 5px;
    padding: 20px;
    .titleCard, .imgCard{
        justify-self: center;
    }
    .right{
        opacity: 1;
    }
`;

export const CardResultStyle = styled.div`
    display: grid;
    background-color: var(--black-font);
    padding: 15px 30px;
    align-items: center;
    gap: 15px;
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