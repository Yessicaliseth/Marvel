import { ParagraphStyle } from './styles';

export default function P({
  size,
  children,
  color,
  className = ''
}) {
  return (
    <ParagraphStyle className={`${className} ${size || ''}`} color={`${color || ''}`}>
      {children}
    </ParagraphStyle>
  );
}
