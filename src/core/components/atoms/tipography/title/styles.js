import { device } from 'core/const/device';
import styled from 'styled-components';



export const TitleStyle = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color ? `${props.color}` : 'var(--gray-font)'};

  @media ${device.desktop} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.mobile} {
    font-size: 20px;
  }
  &.large {
    font-size: 40px;
  }
  &.medium {
    font-size: 30px;
  }
  &.small {
    font-size: 20px;
  }
`;
