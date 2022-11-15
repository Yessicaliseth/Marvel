import styled, {css} from 'styled-components';

export const HeaderStyle = styled.div`
    width: 100vw;
    display: grid;
    z-index: 1;
    position: relative;
    height: 60px;
    backdrop-filter: blur(26px);
    position: fixed;
    top: 0;

    &::after{
      content:"";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--black-bg);
      opacity:.7 ;
      top: 0;
      left: 0;
    }


    .logoMarvel{
        place-self: center;
        position: relative;
        z-index: 2;
    }
`