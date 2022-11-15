import { device } from 'core/const/device';
import styled from 'styled-components';

export const Title3Style = styled.h4`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color ? `${props.color}` : 'var(--gray-font)'};

  @media ${device.desktop} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 15px;
  }
  @media ${device.mobile} {
    font-size: 13px;
  }
  &.large {
    font-size: 16px;
  }
  &.medium {
    font-size: 15px;
  }
  &.small {
    font-size: 13px;
  }
`;
