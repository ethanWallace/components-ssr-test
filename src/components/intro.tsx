'use client';

import { GcdsHeading, GcdsText } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Intro: FC = () => (
  <div>
    <GcdsHeading tag="h1">GCDS components / Next.js exploration</GcdsHeading>

    <GcdsText>
      This Nextjs app is to help explore the experimental <strong>gcds-components-ssr</strong> package and how the web components from the GC design system react to server side rendering.
    </GcdsText>
  </div>
);