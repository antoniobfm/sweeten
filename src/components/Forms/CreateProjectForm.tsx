import { useCallback, useRef, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import getValidationErrors from '../../utils/getValidationErrors';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useToast } from "@/hooks/toast";
import api from "@/services/api";

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

export default function CreateProjectForm({ setState }: any) {
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatorio'),
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email('Digite um e-mail valido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string().required('Campo obrigatorio'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val) => !!val.length,
              then: Yup.string().required('Campo obrigatorio'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
              old_password,
              password,
              password_confirmation,
            }
            : {}),
        };

        const response = await api.put('/profile', formData);


        addToast({
          type: 'success',
          title: `Modified your profile with success`
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: `Something went wrong`
          });

          return;
        }
      }
    },
    [],
  );


  const node = useRef<HTMLDivElement>();

  const [open, setOpen] = useState(true);

  return (
    <>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <Input
          name="name"
          labelName="Nome do projeto"
          placeholder="Espero que um bom"
          type="input"
        />

        <Button style={{ width: '100%' }} type="submit">CRIAR</Button>
      </Form>
    </>
  );
}
