'use client';

import { GcdsHeading, GcdsText } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Intro: FC = () => (
  <div>
    <GcdsHeading tag="h1">GCDS components / Next.js exploration</GcdsHeading>

    <GcdsText>
      This Nextjs app is to help explore the experimental <strong>gcds-components-ssr</strong> package and how the web components from the GC design system react to server side rendering.
    </GcdsText>
    
    <GcdsText>
      Some things noticed so far:
    </GcdsText>

    <ul className="ms-400 list-disc">
      <li>Breadcrumbs = slot issue</li>
      <li>Cards = slot issue</li>
      <li>Checkbox = no DSD</li>
      <li>Date Modified = no DSD</li>
      <li>Fieldset = no DSD</li>
      <li>FileUploader = no DSD</li>
      <li>Grid/Grid col = slot issue</li>
      <li>Header = extra attribute on render "role"</li>
      <li>Hint = No DSD</li>
      <li>Input = No DSD</li>
      <li>Label = No DSD</li>
      <li>Link = who knows what?</li>
      <li>NavGroup - slot issue</li>
      <li>Pagination = no DSD</li>
      <li>Radio = no DSD</li>
      <li>Search = no DSD, and who knows what?</li>
      <li>Select = no DSD</li>
      <li>Side Navigation = slot issue</li>
      <li>Signature =  no DSD</li>
      <li>Top nav = slot issue</li>
    </ul>

    <GcdsHeading tag="h2">What is no DSD?</GcdsHeading>
    <GcdsText>
      No DSD stands for no declarative shadow-dom. This is caused by the components not using shadow-dom so they won't render in SSR. We are looking to convert the form components over to using shadow-dom and be form associated (maybe).
      Everything else could be converted to use shadow-dom.
    </GcdsText>

    <GcdsHeading tag="h2">What is the slot issue?</GcdsHeading>
    <GcdsText>
      Currently when you pass a GCDS component into a slot of another GCDS component, you recieve a hydration error.
    </GcdsText>
  </div>
);