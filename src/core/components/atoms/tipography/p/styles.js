import { device } from 'core/const/device';
import styled from 'styled-components';

export const ParagraphStyle = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color ? `${props.color}` : 'var(--gray-font)'};

  @media ${device.desktop} {
    font-size: 15px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
  @media ${device.mobile} {
    font-size: 13px;
  }
  &.large {
    font-size: 15px;
  }
  &.medium {
    font-size: 14px;
  }
  &.small {
    font-size: 13px;
  }
`;
