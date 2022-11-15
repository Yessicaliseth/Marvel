import { TitleStyle } from './styles';

export default function Title({
  size,
  children,
  color,
  className = ''
}) {
  return (
    <TitleStyle className={`${className} ${size || ''}`} color={`${color || ''}`}>
      {children}
    </TitleStyle>
  );
}
