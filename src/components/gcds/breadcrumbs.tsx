'use client';

import { GcdsBreadcrumbs, GcdsBreadcrumbsItem, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Breadcrumbs: FC = () => (
  <div>
    <GcdsHeading tag="h2">Breadcrumbs</GcdsHeading>
    
    <GcdsBreadcrumbs>
    </GcdsBreadcrumbs>
    
    <GcdsBreadcrumbs>
      <GcdsBreadcrumbsItem href="#">Design System</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="#">Components</GcdsBreadcrumbsItem>
    </GcdsBreadcrumbs>

    <GcdsBreadcrumbs hideCanadaLink>
      <GcdsBreadcrumbsItem href="#">Breadcrumb</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="#">Breadcrumb</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="#">Breadcrumb</GcdsBreadcrumbsItem>
    </GcdsBreadcrumbs>
  </div>
);