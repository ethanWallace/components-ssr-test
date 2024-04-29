'use client';

import { GcdsTopNav, GcdsNavGroup, GcdsNavLink, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const TopNav: FC = () => (
  <div>
    <GcdsHeading tag="h2">Top Navigation</GcdsHeading>
    
    <GcdsTopNav label="topbar" alignment="right" lang="en">
      <GcdsNavLink href="#red" slot="home">Home</GcdsNavLink>
      <GcdsNavLink href="#red">Installation</GcdsNavLink>
      <GcdsNavLink href="#red">Foundations</GcdsNavLink>
      <GcdsNavLink href="#red" current>Components</GcdsNavLink>
      <GcdsNavGroup
        menuLabel="Contact us submenu"
        openTrigger="Contact us"
      >
        <GcdsNavLink href="#red">Form</GcdsNavLink>
        <GcdsNavLink href="#red">GitHub</GcdsNavLink>
        <GcdsNavLink href="#red">Slack</GcdsNavLink>
      </GcdsNavGroup>
    </GcdsTopNav>
  </div>
);