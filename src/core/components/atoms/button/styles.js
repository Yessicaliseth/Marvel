import { device } from 'core/const/device';
import styled, { css } from 'styled-components';


const LargeStyles = css`
  padding: 6px 12px;
  font-size: 18px;
`;

const MediumStyles = css`
  padding: 5px 10px;
  font-size: 16px;
`;

const SmallStyles = css`
  padding: 4px 8px;
  font-size: 14px;
`;

export const ButtonStyle = styled.button`
  border-radius: 3px;
  max-width: fit-content;
  font-family: 'Raleway', sans-serif;
  border: none;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  background: transparent;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 7px;

  &.text {
    color: ${props => props.color ? `${props.color}` : 'var(--green)'};

    &::after {
      content: '';
      position: absolute;
      background: ${props => props.color ? `${props.color}` : 'var(--green)'};
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      transition: 0.3s;
      border-radius: 5px;
    }

    &:hover {
      &::after {
        opacity: 0.1;
      }
    }

    &.disabled {
      color: gray;
      cursor: no-drop;
      &:hover {
        &::after {
          opacity: 0;
        }
      }
    }
  }

  &.contained {
    background: ${props => props.color ? `${props.color}` : 'var(--green)'};
    color: ${props => props.color ? `${props.color}` : 'var(--black-font)'};;
    &:hover {
      opacity: 0.6;
    }

    &.disabled {
      opacity: 1;
      background: gray;
      cursor: no-drop;
    }
  }

  &.outlined {
    border: 1px solid ${props => props.color ? `${props.color}` : 'var(--green)'};
    color: ${props => props.color ? `${props.color}` : 'var(--green)'};
    &:hover {
      opacity: 0.6;
    }
    &.disabled {
      opacity: 1;
      color: gray;
      border: 1px solid gray;
      cursor: no-drop;
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

  &.large {
    ${LargeStyles}
  }

  &.medium {
    ${MediumStyles}
  }
  &.small {
    ${SmallStyles}
  }
`;
