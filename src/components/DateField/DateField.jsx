import { DateContainer } from './DateField.styles';

function DateField(props) {
  const { label, name, required } = props.question;
  const { value, onChange, onBlur } = props;

  return (
    <DateContainer>
      <label htmlFor={name}>
        {label}:{required && <span>*</span>}
      </label>
      <input
        type="date"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </DateContainer>
  );
}

export default DateField;
