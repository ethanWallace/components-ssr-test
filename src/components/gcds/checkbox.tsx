'use client';

import { GcdsCheckbox, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Checkbox: FC = () => (
  <div>
    <GcdsHeading tag="h2">Checkbox</GcdsHeading>
    
    <GcdsCheckbox
      checkboxId="form-checkbox"
      label="This is a checkbox"
      required
      hint="With a hint"
    ></GcdsCheckbox>
    <GcdsCheckbox
      checkboxId="form-checkbox2"
      label="This is a checked checkbox"
      required
      checked
      hint="With a hint"
    ></GcdsCheckbox>
    <GcdsCheckbox
      checkboxId="form-checkbox3"
      label="This is a checkbox with an error"
      required
      checked
      hint="and you can't get rid of it"
      errorMessage="So many errors"
    ></GcdsCheckbox>
  </div>
);