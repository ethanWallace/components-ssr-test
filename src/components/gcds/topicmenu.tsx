'use client';

import { GcdsTopicMenu, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const TopicMenu: FC = () => (
  <div>
    <GcdsHeading tag="h2">Theme and Topic Menu</GcdsHeading>
    
    <GcdsTopicMenu lang="fr"></GcdsTopicMenu>
  </div>
);