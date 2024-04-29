'use client';

import { GcdsNavGroup, GcdsNavLink, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const NavGroup: FC = () => (
  <div>
    <GcdsHeading tag="h2">Navigation Group</GcdsHeading>

    <GcdsNavGroup menu-label="Contact submenu" openTrigger="Contact"></GcdsNavGroup>
    
    <GcdsNavGroup menu-label="Contact submenu" openTrigger="Contact" open>
      <GcdsNavLink href="#red">Site</GcdsNavLink>
      <GcdsNavLink href="#red">GitHub</GcdsNavLink>
      <GcdsNavGroup
        menuLabel="Sub level submenu"
        openTrigger="Sub level"
      >
        <GcdsNavLink href="#red">Site</GcdsNavLink>
        <GcdsNavLink href="#red">GitHub</GcdsNavLink>
        <GcdsNavLink href="#red">Slack</GcdsNavLink>
      </GcdsNavGroup>
    </GcdsNavGroup>
  </div>
);