'use client';

import { GcdsHeader, GcdsLangToggle, GcdsSignature } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Header: FC = () => (
  <div>
    <GcdsHeader>
      <GcdsSignature type="signature" slot="signature"></GcdsSignature>
      <GcdsLangToggle slot="toggle" href="#" lang="en"></GcdsLangToggle>
    </GcdsHeader>
  </div>
);