import { FullNameContainer } from './FullNameField.styles';

function FullNameField(props) {
  const { label, name, required } = props.question;
  const { value, onChange } = props;

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
      />
    </FullNameContainer>
  );
}

export default FullNameField;
