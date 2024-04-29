'use client';

import { GcdsContainer, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Container: FC = () => (
  <div>
    <GcdsHeading tag="h2">Container</GcdsHeading>
    
    <GcdsContainer size="full" border padding="400">
      <p>
        I'm a responsive container. My size is only limited by the size of my
        parent container.
      </p>
    </GcdsContainer>
    <br />
    <GcdsContainer size="lg" centered border padding="400">
      <p>I'm a large, centred container. My max size is 64rem (1024px).</p>
    </GcdsContainer>
    <br />
    <GcdsContainer size="xs" border padding="400">
      <p>I'm an extra-small container. My max size is 20rem (320px).</p>
    </GcdsContainer>
  </div>
);