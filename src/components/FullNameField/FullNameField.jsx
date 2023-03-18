import { FullNameContainer } from './FullNameField.styles';

function FullNameField(props) {
  const { label, name, required } = props.question;
  const { value, onChange, onBlur } = props;

  return (
    <FullNameContainer>
      <label htmlFor={name}>
        {label}:{required && <span>*</span>}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FullNameContainer>
  );
}

export default FullNameField;
