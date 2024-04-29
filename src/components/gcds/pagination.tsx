'use client';

import { GcdsPagination, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Pagination: FC = () => (
  <div>
    <GcdsHeading tag="h2">Pagination</GcdsHeading>
    
    <GcdsPagination
      display="list"
      label="List pagination"
      type="list"
      totalPages="22"
      currentPage="8"
      url='{"queryStrings": { "querystring::offset": 10 }, "fragment": "main" }'
    ></GcdsPagination>

    <GcdsPagination
      display="simple"
      label="Simple Pagination"
      previousHref="#"
      previousLabel="Previous"
      nextHref="#"
      nextLabel="Next page"
    ></GcdsPagination>
  </div>
);