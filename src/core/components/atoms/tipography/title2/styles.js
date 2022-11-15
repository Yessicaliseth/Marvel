import { device } from 'core/const/device';
import styled from 'styled-components';

export const Title2Style = styled.h3`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color ? `${props.color}` : 'var(--gray-font)'};

  @media ${device.desktop} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 17px;
  }
  @media ${device.mobile} {
    font-size: 15px;
  }
  &.large {
    font-size: 20px;
  }
  &.medium {
    font-size: 17px;
  }
  &.small {
    font-size: 15px;
  }
`;
