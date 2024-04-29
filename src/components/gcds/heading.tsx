'use client';

import { GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Heading: FC = () => (
  <div>
    <GcdsHeading tag="h2">Heading</GcdsHeading>
    
    <GcdsHeading tag="h1">Heading level 1</GcdsHeading>
    <GcdsHeading tag="h2">Heading level 2</GcdsHeading>
    <GcdsHeading tag="h3">Heading level 3</GcdsHeading>
    <GcdsHeading tag="h4">Heading level 4</GcdsHeading>
    <GcdsHeading tag="h5">Heading level 5</GcdsHeading>
    <GcdsHeading tag="h6">Heading level 6</GcdsHeading>
  </div>
);