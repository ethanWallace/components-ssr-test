'use client';

import { GcdsSearch, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Search: FC = () => (
  <div>
    <GcdsHeading tag="h2">Search</GcdsHeading>
    
    <GcdsSearch
      action="/searchresults"
      method="post"
      name="customsearch"
      searchId="customsearch"
      suggested="Nextjs test site"
    ></GcdsSearch>
  </div>
);