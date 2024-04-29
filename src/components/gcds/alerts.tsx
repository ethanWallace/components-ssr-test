'use client';

import { GcdsAlert, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Alerts: FC = () => (
  <div>
    <GcdsHeading tag="h2">Alerts</GcdsHeading>
    
    <GcdsAlert heading="Success alert" alertRole="success">
      <p>Example content</p>
    </GcdsAlert>
    <GcdsAlert heading="Info alert" alertRole="info">
      <p>Example content</p>
    </GcdsAlert>
    <GcdsAlert heading="Warning alert" alertRole="warning">
      <p>Example content</p>
    </GcdsAlert>
    <GcdsAlert heading="Danger alert" alertRole="danger">
      <p>Example content</p>
    </GcdsAlert>
  </div>
);