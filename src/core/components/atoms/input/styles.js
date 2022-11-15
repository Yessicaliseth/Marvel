import { device } from 'core/const/device';
import styled from 'styled-components';

export const InputStyle = styled.input`
  font-family: 'Raleway', sans-serif;
  border: none;
  border-radius: 3px;
  max-width: 100%;
  color: ${props => props.color ? `${props.color}` : 'var(--gray-font)'};
  background-color: ${props => props.color ? `${props.color}` : 'var(--black)'};

  @media ${device.desktop} {
    font-size: 16px;
    padding: 6px 12px;
  }
  @media ${device.laptop} {
    font-size: 15px;
    padding: 5px 10px;
  }
  @media ${device.mobile} {
    font-size: 13px;
    padding: 4px 8px;
  }
  &.large {
    font-size: 16px;
    padding: 6px 12px;
  }
  &.medium {
    font-size: 15px;
    padding: 5px 10px;
  }
  &.small {
    font-size: 13px;
    padding: 4px 8px;
  }
`;
