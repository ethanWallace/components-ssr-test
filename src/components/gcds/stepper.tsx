'use client';

import { GcdsStepper, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Stepper: FC = () => (
  <div>
    <GcdsHeading tag="h2">Stepper</GcdsHeading>
    
    <GcdsStepper currentStep="1" totalSteps="3"></GcdsStepper>
    <GcdsStepper currentStep="1" totalSteps="3" lang="fr"></GcdsStepper>
  </div>
);