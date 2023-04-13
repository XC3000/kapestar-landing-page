import React from "react";

const FormInput = ({ register, label }) => {
  return (
    <div class="form-floating mb-3">
      <label htmlFor={register.name}>{label}</label>
      <input class="form-control" type="text" {...register} />
    </div>
  );
};

export default FormInput;
