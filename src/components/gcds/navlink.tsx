'use client';

import { GcdsNavLink, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const NavLink: FC = () => (
  <div>
    <GcdsHeading tag="h2">Navigation Link</GcdsHeading>

    <GcdsNavLink href="#red">Site</GcdsNavLink>
    <GcdsNavLink href="#red" current>GitHub</GcdsNavLink>
  </div>
);