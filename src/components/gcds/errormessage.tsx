'use client';

import { GcdsErrorMessage, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const ErrorMessage: FC = () => (
  <div>
    <GcdsHeading tag="h2">ErrorMessage</GcdsHeading>
    
    <GcdsErrorMessage messageId="error" message="This is an error message"></GcdsErrorMessage>
  </div>
);