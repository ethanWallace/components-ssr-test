'use client';

import { GcdsCard, GcdsButton, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Cards: FC = () => (
  <div>
    <GcdsHeading tag="h2">Cards</GcdsHeading>
    
    <GcdsCard
      cardTitle="Link card number 1"
      titleElement="h4"
      href="#red"
      description="This is a card"
      tag="Core"
      // imgSrc="https://picsum.photos/480/270"
      // style={{ maxWidth: '400px' }} // Might need to build an exception for this in ssr package builder
    >
    </GcdsCard>
    <GcdsCard
      type="action"
      cardTitle="Action card number 1"
      titleElement="h4"
      href="#red"
      description="Morbi malesuada interdum augue. Nam id quam non orci aliquam malesuada sit amet ut magna. Integer hendrerit lorem sit amet risus dignissim aliquam."
      // imgSrc="https://picsum.photos/480/270"
      // style={{ maxWidth: '400px' }}
    >
      <GcdsButton
        type="button"
        buttonRole="secondary"
        slot="footer"
      >
        Action
      </GcdsButton>
    </GcdsCard>

    <p><strong>Notes</strong></p>
    <p>Let's try this with an image too. Just don't want to play around with Next.js at the moment.</p>
  </div>
);