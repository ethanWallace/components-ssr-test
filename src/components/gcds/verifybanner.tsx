'use client';

import { GcdsVerifyBanner, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const VerifyBanner: FC = () => (
  <div>
    <GcdsHeading tag="h2">Verify Banner</GcdsHeading>
    
    <GcdsVerifyBanner lang="en"></GcdsVerifyBanner>
    <GcdsVerifyBanner lang="fr"></GcdsVerifyBanner>
  </div>
);