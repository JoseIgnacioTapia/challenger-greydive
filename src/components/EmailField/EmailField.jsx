import { EmailContainer } from './EmailField.styles';

function EmailField(props) {
  const { label, name, required } = props.question;
  const { value, onChange, onBlur } = props;

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
        onBlur={onBlur}
      />
    </EmailContainer>
  );
}

export default EmailField;
