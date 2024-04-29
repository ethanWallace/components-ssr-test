'use client';

import { GcdsLangToggle, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const LangToggle: FC = () => (
  <div>
    <GcdsHeading tag="h2">Language Toggle</GcdsHeading>
    
    <GcdsLangToggle href="#en" lang="fr"></GcdsLangToggle>
    <GcdsLangToggle href="#fr" lang="en"></GcdsLangToggle>
  </div>
);