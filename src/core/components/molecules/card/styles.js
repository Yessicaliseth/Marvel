import { device } from 'core/const/device';
import styled, {css} from 'styled-components';

const LargeStyles = css`
    width: 500px;
    height: 200px;
    padding: 20px;
`;

const MediumStyles = css`
    width: 300px;
    height: 150px;
    padding: 10px;
    .div{
        width: 80px;
        height: 80px;
    }
    .title-card{
        font-size: 20px;
    }
`;

const SmallStyles = css`
    width: 200px;
    height: 200px;
    padding: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto auto;
    .div{
        width: 60px;
        height: 60px;
        grid-area: 1 / 1 / 2 / 2;
        justify-self: center;
    }
    .button-hero{
        grid-area: 2 / 1 / 3 / 2;
    }
    .title-card{
        grid-area: 3 / 1 / 4 / 2;
        justify-self: center;
    }
    .button-seemore{
        grid-area: 4 / 1 / 5 / 2;
        justify-self: end;
    }
`;

export const CardStyle = styled.div`
    background-color: var(--black-font);
    z-index: 2;
    border-radius: 15px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: end;
    align-items: center;
    gap: 10px;

    .div{
        width: 120px;
        height: 120px;
        grid-area: 1 / 1 / 4 / 2;
        background-color: var(--green);
        border-radius: 3px;
    }
    .button-hero{
        grid-area: 1 / 2 / 2 / 3;
        cursor: default;
    }
    .title-card{
        grid-area: 2 / 2 / 3 / 3;
    }
    .button-seemore{
        opacity: 0;
        justify-self: end;
        grid-area: 3 / 2 / 4 / 3;
    }
    &:hover{
        border: 2px solid var(--green);
        .button-hero{
            color: var(--white-font);
            border-color: var(--white-font);
        }
        .button-seemore{
            opacity: 1;
        }
        .title-card{
            color: var(--green);
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