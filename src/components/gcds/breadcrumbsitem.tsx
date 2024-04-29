'use client';

import {  GcdsBreadcrumbsItem, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const BreadcrumbsItem: FC = () => (
  <div>
    <GcdsHeading tag="h2">Breadcrumb items</GcdsHeading>
    
    <GcdsBreadcrumbsItem className="red" role="group" href="#">Design System</GcdsBreadcrumbsItem>
  </div>
);