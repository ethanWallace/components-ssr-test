'use client';

import { GcdsDetails, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Details: FC = () => (
  <div>
    <GcdsHeading tag="h2">Details</GcdsHeading>
    
    <GcdsDetails detailsTitle="Find out more">
      <p>Details about stuff.</p>
    </GcdsDetails>
    <GcdsDetails open detailsTitle="Find out more">
      <p>Details about stuff.</p>
    </GcdsDetails>
  </div>
);