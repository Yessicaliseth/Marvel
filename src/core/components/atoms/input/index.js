import { InputStyle } from './styles';

export default function Input({
  size,
  children,
  className = '',
  placeholder = '',
  onChange,
  value
}) {
  return (
    <InputStyle 
      placeholder={placeholder} 
      className={`${className} ${size || ''}`}
      onChange={onChange}
      value={value}
    >
    </InputStyle>
  );
}
