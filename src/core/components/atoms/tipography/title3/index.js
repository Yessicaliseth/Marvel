import { Title3Style } from './styles';

export default function Title3({
  size,
  children,
  className = ''
}) {
  return (
    <Title3Style className={`${className} ${size || ''}`}>
      {children}
    </Title3Style>
  );
}
