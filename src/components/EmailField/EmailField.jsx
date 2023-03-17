import { EmailContainer } from './EmailField.styles';

function EmailField(props) {
  const { label, name, required, value, onChange } = props.question;

  return (
    <EmailContainer>
      <label htmlFor={name}>
        {label}:{required && <span>*</span>}
      </label>
      <input
        type="email"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </EmailContainer>
  );
}

export default EmailField;
