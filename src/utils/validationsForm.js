function dateValidation(date) {
  const objDate = new Date(date);

  if (isNaN(objDate.getTime())) {
    return false;
  }

  const minDate = new Date('1900-01-01');
  const maxDate = new Date();

  if (objDate < minDate || objDate > maxDate) {
    return false;
  }

  return true;
}

export const validationsForm = form => {
  let errors = {};

  if (
    !form.full_name.trim() ||
    !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.full_name.trim())
  ) {
    errors.name =
      "El campo 'Nombre' es requerido y puede contener solo letras y espacios en blancos";
  }

  if (
    !form.email.trim() ||
    !/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(
      form.email.trim()
    )
  ) {
    errors.email = 'Debe ingresar un email válido, intente de nuevo';
  }

  if (!form.birth_date.trim() || !dateValidation(form.birth_date.trim())) {
    errors.date = 'La fecha ingresada no es válida, intente de nuevo';
  }

  if (
    !form.country_of_origin.trim() === '' ||
    form.country_of_origin.trim() === 'default'
  ) {
    errors.country = 'Debe seleccionar un país de origen';
  }

  if (form.terms_and_conditions === '' || !form.terms_and_conditions) {
    errors.checkbox = 'Debe aceptar los términos y condiciones';
  }

  return errors;
};
