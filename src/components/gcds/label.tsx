'use client';

import { GcdsLabel, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Label: FC = () => (
  <div>
    <GcdsHeading tag="h2">Label</GcdsHeading>
    
    <GcdsLabel label="This is a label"></GcdsLabel>
    <GcdsLabel label="This is a required label" required></GcdsLabel>
  </div>
);