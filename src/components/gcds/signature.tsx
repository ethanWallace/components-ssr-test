'use client';

import { GcdsSignature, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Signature: FC = () => (
  <div>
    <GcdsHeading tag="h2">Signature</GcdsHeading>
    
    <GcdsSignature
      type="signature"
      hasLink
      lang="en"
    ></GcdsSignature>
    <GcdsSignature
      type="signature"
      hasLink
      lang="fr"
    ></GcdsSignature>
    <GcdsSignature
      type="wordmark"
      lang="en"
    ></GcdsSignature>
    <GcdsSignature
      type="wordmark"
      lang="fr"
    ></GcdsSignature>

    <div style={{backgroundColor: '#333'}}>
    <GcdsSignature
      type="signature"
      variant="white"
      hasLink
      lang="en"
    ></GcdsSignature>
    <GcdsSignature
      type="signature"
      variant="white"
      hasLink
      lang="fr"
    ></GcdsSignature>
    <GcdsSignature
      type="wordmark"
      variant="white"
      lang="en"
    ></GcdsSignature>
    <GcdsSignature
      type="wordmark"
      variant="white"
      lang="fr"
    ></GcdsSignature>
    </div>
  </div>
);