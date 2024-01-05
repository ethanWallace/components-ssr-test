'use client';

import { GcdsIcon, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Icon: FC = () => (
  <div>
    <GcdsHeading tag="h2">Icon</GcdsHeading>
    
    <GcdsIcon name="close" size="caption" marginRight="200"></GcdsIcon>
      <GcdsIcon name="close" size="text" marginRight="200"></GcdsIcon>
      <GcdsIcon name="close" size="h6" marginRight="200"></GcdsIcon>
      <GcdsIcon name="close" size="h5" marginRight="200"></GcdsIcon>
      <GcdsIcon name="close" size="h4" marginRight="200"></GcdsIcon>
      <GcdsIcon name="close" size="h3" marginRight="200"></GcdsIcon>
      <GcdsIcon name="close" size="h2" marginRight="200"></GcdsIcon>
      <GcdsIcon name="close" size="h1" marginRight="200"></GcdsIcon>

      <GcdsHeading tag="h4">Fixed width icons (square ratio)</GcdsHeading>
      <GcdsIcon name="close" size="text" fixedWidth></GcdsIcon>
      <GcdsIcon name="folder" size="text" fixedWidth></GcdsIcon>
      <GcdsIcon name="fire" size="text" fixedWidth></GcdsIcon>
      <GcdsIcon name="utensils" size="text" fixedWidth></GcdsIcon>

      <GcdsHeading tag="h4">Variable width icons (auto width)</GcdsHeading>
      <GcdsIcon name="close" size="text"></GcdsIcon>
      <GcdsIcon name="folder" size="text"></GcdsIcon>
      <GcdsIcon name="fire" size="text"></GcdsIcon>
      <GcdsIcon name="utensils" size="text"></GcdsIcon>
  </div>
);