import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface BaseI {
  type: 'link' | 'button';
  text: string;
}

interface LinkI extends BaseI {
  onClick?: undefined;
  href?: string;
  external?: boolean;
}

interface ButtonI extends BaseI {
  onClick?: () => void;
  href?: undefined;
  external?: undefined;
}

// prettier-ignore
const BaseStyle = css`
  background: ${props => props.theme.highlight};
  color: ${props => props.theme.dark};
  padding: ${props => `${props.theme.um_small} ${props.theme.um_medium}`};
  font-weight: ${props => props.theme.wg_bold};
  margin: ${props => props.theme.um_small};
  transition: background 0.5s ease;

  @media(hover: hover) {
    :hover {
      background: white;
    }
  }
`;

const StyledButton = styled.button`
  ${BaseStyle}

  border: none;
  cursor: pointer;
`;

const StyledLink = styled.a`
  ${BaseStyle}

  text-align: center;
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;

const Button: FC<LinkI | ButtonI> = ({
  type,
  onClick,
  href,
  external,
  text,
}) => {
  if (type === 'link') {
    if (external) {
      return (
        <StyledLink href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </StyledLink>
      );
    }

    return <StyledLink href={href}>{text}</StyledLink>;
  }

  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
