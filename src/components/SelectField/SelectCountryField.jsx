import { SelectContainer } from './SelectCountryField.styles';

function SelectCountryField(props) {
  const { label, name, options, value, required } = props.question;
  const { onChange } = props;

  return (
    <SelectContainer>
      <label htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
      <select defaultValue="default" name={name} id={name} onChange={onChange}>
        <option value="default">Elija su país</option>
        {options?.map(country => (
          <option key={country.label} value={value}>
            {country.label}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}

export default SelectCountryField;
