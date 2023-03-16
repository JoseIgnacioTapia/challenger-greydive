import { FullNameContainer } from './FullNameField.styles';

function FullNameField(props) {
  const { label, name, required, value, onChange } = props.question;

  return (
    <FullNameContainer>
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </FullNameContainer>
  );
}

export default FullNameField;
