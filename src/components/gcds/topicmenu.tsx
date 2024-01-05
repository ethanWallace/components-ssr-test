'use client';

import { GcdsTopicMenu, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const TopicMenu: FC = () => (
  <div>
    <GcdsHeading tag="h2">Theme and Topic Menu</GcdsHeading>
    
    <GcdsTopicMenu></GcdsTopicMenu>
  </div>
);