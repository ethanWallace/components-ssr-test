'use client';

import { GcdsRadio, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Radio: FC = () => (
  <div>
    <GcdsHeading tag="h2">Radio Button</GcdsHeading>
    
    <GcdsRadio name="radiowc" label="Radio 1" radioId="r1" value="red"></GcdsRadio>
    <GcdsRadio name="radiowc" label="Radio 2" radioId="r2" value="blue"></GcdsRadio>
  </div>
);