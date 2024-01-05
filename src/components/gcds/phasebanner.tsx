'use client';

import { GcdsPhaseBanner, GcdsIcon, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const PhaseBanner: FC = () => (
  <div>
    <GcdsHeading tag="h2">Phase Banner</GcdsHeading>
    
    <GcdsPhaseBanner bannerRole="primary">
      <GcdsIcon name="tree" size="sm" slot="banner-icon-left"></GcdsIcon>
      <p slot="banner-text">Exciting announcement.</p>
    </GcdsPhaseBanner>
    <GcdsPhaseBanner bannerRole="secondary">
      <GcdsIcon name="tree" size="sm" slot="banner-icon-left"></GcdsIcon>
      <p slot="banner-text">Exciting announcement.</p>
    </GcdsPhaseBanner>
  </div>
);