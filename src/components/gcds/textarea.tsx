'use client';

import { GcdsTextarea, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Textarea: FC = () => (
  <div>
    <GcdsHeading tag="h2">Textarea</GcdsHeading>
    
    <GcdsTextarea 
      textareaId="textarea"
      label="Textarea"
      hint="With a hint"
    ></GcdsTextarea>
    <GcdsTextarea 
      textareaId="textarea2"
      label="Textarea with defined value"
      hint="With a hint"
      value="Value already here"
    ></GcdsTextarea>
    <GcdsTextarea 
      textareaId="textarea3"
      label="Textarea with character limit"
      hint="With a hint"
      characterCount="200"
    ></GcdsTextarea>
  </div>
);