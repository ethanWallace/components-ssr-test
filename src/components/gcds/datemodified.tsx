'use client';

import { GcdsDateModified, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const DateModified: FC = () => (
  <div>
    <GcdsHeading tag="h2">DateModified</GcdsHeading>
    
    <GcdsDateModified>2023-01-26</GcdsDateModified>
    <GcdsDateModified version>0.0.3</GcdsDateModified>
  </div>
);