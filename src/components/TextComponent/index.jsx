import P from 'prop-types';
import { theme } from '../../styles/theme';
import * as Styles from './styles';

export const TextComponent = ({
  children,
  lineHeight,
  letterSpacing,
  textIndent,
  textAlign,
  wordBreak,
  textEllipsis,
}) => {
  return (
    <Styles.Container
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      wordBreak={wordBreak}
      textIndent={textIndent}
      textEllipsis={textEllipsis}
    >
      {children}
    </Styles.Container>
  );
};

TextComponent.defaultProps = {
  letterSpacing: theme.font.letterSpacing.none,
  lineHeight: 'unset',
  textIndent: '0',
  textAlign: 'start',
  wordBreak: true,
  textEllipsis: false,
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  letterSpacing: P.string,
  lineHeight: P.string,
  textIndent: P.string,
  textAlign: P.oneOf(['start', 'center', 'end', 'justify', 'unset']),
  wordBreak: P.bool,
  textEllipsis: P.bool,
};
