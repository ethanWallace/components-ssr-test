'use client';

import { GcdsInput, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Input: FC = () => (
  <div>
    <GcdsHeading tag="h2">Input</GcdsHeading>

    <GcdsInput
      id="test"
      inputId="form-name"
      label="Name"
      name="red"
      hint="hello"
      required
      lang="fr"
    ></GcdsInput>


    <GcdsInput
      inputId="form-email"
      label="Email"
      type="email"
      hint="Please enter your email."
      required
    ></GcdsInput>

    <GcdsInput
      inputId="form-number"
      type="number"
      size="10"
      label="Phone number"
      hint="Please enter a 10 digits number."
      required
    ></GcdsInput>
     
    <GcdsInput
      inputId="form-name2"
      label="Name"
      hint="Please enter your full name."
      errorMessage="Error"
    ></GcdsInput>
  </div>
);