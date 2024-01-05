'use client';

import {  GcdsBreadcrumbsItem, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const BreadcrumbsItem: FC = () => (
  <div>
    <GcdsHeading tag="h2">Breadcrumb items</GcdsHeading>
    
    <GcdsBreadcrumbsItem href="#">Design System</GcdsBreadcrumbsItem>
  </div>
);