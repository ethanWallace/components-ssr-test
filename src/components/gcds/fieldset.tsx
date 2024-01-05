'use client';

import { GcdsFieldset, GcdsCheckbox, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Fieldset: FC = () => (
  <div>
    <GcdsHeading tag="h2">Fieldset</GcdsHeading>
    
    <GcdsFieldset
      fieldsetId="fieldset"
      legend="Fieldset"
      hint="Nothing in it right now"
    ></GcdsFieldset>
    <GcdsFieldset
      fieldsetId="fieldset2"
      legend="Fieldset with a checkbox"
    >
      <GcdsCheckbox
        checkboxId="form-checkbox6"
        label="This is a checkbox"
        hint="With a hint"
      ></GcdsCheckbox>
    </GcdsFieldset>
  </div>
);