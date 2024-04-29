'use client';

import { GcdsSideNav, GcdsNavGroup, GcdsNavLink, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const SideNav: FC = () => (
  <div>
    <GcdsHeading tag="h2">Side Navigation</GcdsHeading>
    
    <GcdsSideNav label="Sidenav">
      <GcdsNavGroup menu-label="Contact submenu" openTrigger="Contact">
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
    </GcdsSideNav>
  </div>
);