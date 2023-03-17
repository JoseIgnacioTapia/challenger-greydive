import { DateContainer } from './DateField.styles';

function DateField(props) {
  const { label, name, required, value, onChange } = props.question;

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
      />
    </DateContainer>
  );
}

export default DateField;
