import { device } from 'core/const/device';
import styled from 'styled-components';

export const Title1Style = styled.h2`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color ? `${props.color}` : 'var(--gray-font)'};

  @media ${device.desktop} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.mobile} {
    font-size: 18px;
  }
  &.large {
    font-size: 30px;
  }
  &.medium {
    font-size: 25px;
  }
  &.small {
    font-size: 18px;
  }
`;
