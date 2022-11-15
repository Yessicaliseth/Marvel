import styled, {css} from 'styled-components';

export const SliderStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
    height: 350px;
    background-image: url("avengers.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: sticky;
    top: 0;

    &.withShadow::after{
       content:"";
       position: absolute;
       width: 100%;
       height: 100%;
       background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4458158263305322) 100%);
       top: 0;
       backdrop-filter: blur(1px);
    }
    
`