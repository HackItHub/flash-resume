import React, { useState } from "react";
import FormFieldText from "../layout/FormFieldText";
import { REQUIRED } from "../../utils/Constants";
import { TransparentContainer } from "../layout";

interface Personal {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone: string;
  email: string;
  summary: string;
}

const Person: React.FC = () => {
  const [person, setPerson] = useState<Personal>({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    summary: "",
  });

  const handleChange = (name: string, value) => {
    setPerson({ ...person, [name]: value });
  };

  return (
    <TransparentContainer>
      <h3 className='form-title'>Personal Information</h3>
      <form action='submit'>
        <FormFieldText
          id='firstName'
          dataId='firstName'
          placeholder='Bruce'
          label='First Name'
          onChange={handleChange}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='middleName'
          dataId='middleName'
          placeholder='Thomas'
          label='Middle Name'
          onChange={handleChange}
        />
        <FormFieldText
          id='lastName'
          dataId='lastName'
          placeholder='Wayne'
          label='Last Name'
          onChange={handleChange}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='phone'
          dataId='phone'
          placeholder='1-800-BATMAN'
          label='Phone'
          onChange={handleChange}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='email'
          dataId='email'
          placeholder='definitelynotbatman@waynecorp.org'
          label='Email'
          onChange={handleChange}
          isRequired={REQUIRED}
          type='email'
        />
        <FormFieldText
          id='summary'
          dataId='summary'
          placeholder='Billionaire playboy philanthropist'
          label='Summary'
          onChange={handleChange}
          type='textarea'
        />
        <div className='flex justify-end'>
          <button
            type='submit'
            className='submit-button text-[16px]'
            aria-label='Submit Personal Information'
            onSubmit={() => {}}
          >
            Submit
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Person;
