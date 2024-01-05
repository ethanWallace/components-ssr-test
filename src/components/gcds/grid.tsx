'use client';

import { GcdsGrid, GcdsGridCol, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Grid: FC = () => (
  <div>
    <GcdsHeading tag="h2">Grid</GcdsHeading>
    
    <GcdsGrid
      tag="article"
      columnsDesktop="1fr 1fr 1fr 1fr"
      columnsTablet="1fr 1fr"
      columns="1fr"
      gap="500"
    >
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
    </GcdsGrid>

    <GcdsGrid>
        <GcdsGridCol tablet="3" desktop="6">
          <p className="bg-primary text-light p-300">
            Base: 1/1, tablet: 3/6, desktop: 6/12
          </p>
        </GcdsGridCol>
        <GcdsGridCol tablet="3" desktop="6">
          <p className="bg-primary text-light p-300">
            Base: 1/1, tablet: 3/6, desktop: 6/12
          </p>
        </GcdsGridCol>

        <GcdsGridCol tablet="6" desktop="4">
          <p className="bg-primary text-light p-300">
            Base: 1/1, tablet: 6/6, desktop: 4/12
          </p>
        </GcdsGridCol>
        <GcdsGridCol tablet="6" desktop="4">
          <p className="bg-primary text-light p-300">
            Base: 1/1, tablet: 6/6, desktop: 4/12
          </p>
        </GcdsGridCol>
        <GcdsGridCol tablet="6" desktop="4">
          <p className="bg-primary text-light p-300">
            Base: 1/1, tablet: 6/6, desktop: 4/12
          </p>
        </GcdsGridCol>

        <GcdsGridCol tablet="2" desktop="3">
          <p className="bg-primary text-light p-300">B: 1, t: 2, d: 3</p>
        </GcdsGridCol>
        <GcdsGridCol tablet="2" desktop="6">
          <p className="bg-primary text-light p-300">
            Base: 1/1, tablet: 2/6, desktop: 6/12
          </p>
        </GcdsGridCol>
        <GcdsGridCol tablet="2" desktop="3">
          <p className="bg-primary text-light p-300">B: 1, t: 2, d: 3</p>
        </GcdsGridCol>

        <GcdsGridCol>
          <p className="bg-primary text-light p-300">
            Base + tablet + desktop full width
          </p>
        </GcdsGridCol>
      </GcdsGrid>

    <p><strong>Notes</strong></p>
    <p>Older version: will have to pull newest from develop branch</p>
  </div>
);