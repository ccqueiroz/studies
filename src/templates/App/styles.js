import style, { css } from 'styled-components';

export const Wrapper = style.div`
  ${(props) => css`
    background: ${props.background};
  `}
`;
