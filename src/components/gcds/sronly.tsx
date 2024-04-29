'use client';

import { GcdsSrOnly, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const SrOnly: FC = () => (
  <div>
    <GcdsHeading tag="h2">Screenreader only</GcdsHeading>
    
    <GcdsSrOnly>
      Hidden text not available for all
    </GcdsSrOnly>
  </div>
);