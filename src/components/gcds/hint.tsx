'use client';

import { GcdsHint, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Hint: FC = () => (
  <div>
    <GcdsHeading tag="h2">Hint</GcdsHeading>
    
    <GcdsHint
      hintId="hint"
      hint="This is a hint not in a form pattern"
    ></GcdsHint>
  </div>
);