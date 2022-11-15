import { Title2Style } from './styles';

export default function Title2({
  size,
  children,
  color,
  className = ''
}) {
  return (
    <Title2Style className={`${className} ${size || ''}`} color={`${color || ''}`}>
      {children}
    </Title2Style>
  );
}
