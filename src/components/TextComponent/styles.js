import styled, { css } from 'styled-components';

const transformTextEllipsis = (textEllipsis) => {
  return textEllipsis
    ? css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `
    : css`
      text-overflow: unset;
      white-space: unset;
      overflow: unset;
    `;
};

export const Container = styled.p`
  ${({
    theme,
    lineHeight,
    letterSpacing,
    textIndent,
    textAlign,
    wordBreak,
    textEllipsis,
  }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    text-indent: ${textIndent};
    text-align: ${textAlign};
    word-break: ${wordBreak ? 'break-word' : 'unset'};
    ${transformTextEllipsis(textEllipsis)};
  `}
`;
