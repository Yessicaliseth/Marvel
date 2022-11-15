import { Title1Style } from './styles';

export default function Title1({
  size,
  children,
  color,
  className = ''
}) {
  return (
    <Title1Style className={`${className} ${size || ''}`} color={`${color || ''}`}>
      {children}
    </Title1Style>
  );
}
