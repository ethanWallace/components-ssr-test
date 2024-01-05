'use client';

import { GcdsHeader } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Header: FC = () => (
  <div>
    <GcdsHeader
      lang="en"
      langHref="en"
      skipToHref="#"
    ></GcdsHeader>
  </div>
);