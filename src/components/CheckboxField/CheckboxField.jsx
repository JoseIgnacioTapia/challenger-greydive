import { CheckboxContainer } from './CheckboxField.styles';

function CheckboxField(props) {
  const { label, name, required, value, onChange } = props.question;

  return (
    <CheckboxContainer>
      <label htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={value}
        onChange={onChange}
      />
    </CheckboxContainer>
  );
}

export default CheckboxField;
