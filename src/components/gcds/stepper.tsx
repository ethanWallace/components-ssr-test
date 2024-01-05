'use client';

import { GcdsStepper, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Stepper: FC = () => (
  <div>
    <GcdsHeading tag="h2">Stepper</GcdsHeading>
    
    <GcdsStepper currentStep="1" totalSteps="3"></GcdsStepper>
  </div>
);