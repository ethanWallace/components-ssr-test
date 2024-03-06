'use client';

import { GcdsLink, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Link: FC = () => (
  <div>
    <GcdsHeading tag="h2">Link</GcdsHeading>
    
    <p>
        This is a <GcdsLink size="small" href="/">small link</GcdsLink> if you
        compare it to regular text.
      </p>
      <p>
        <GcdsLink href="https://picsum.photos/480/270" external display="block">This is an external link.</GcdsLink>
      </p>
      <p>
        This is a <GcdsLink
          href="https://picsum.photos/200/200.jpg"
          download="random_image"
          type="image/jpeg"
          > download link (PDF, 1.3 MB)</GcdsLink> with type indicated
      </p>
      <p>
        Contact us <GcdsLink href="mailto:test@test.com?subject=Test%20email">via email</GcdsLink> or by phone.
      </p>
      <p>
        Contact us <GcdsLink href="tel:1234567890">by phone</GcdsLink> or by
        email.
      </p>
      <p>
        There is text before and
        <GcdsLink href="/" display="inline-block">(sample link)</GcdsLink>
        after this link.
      </p>
      {/* <p>
        <GcdsLink href="/" referrerpolicy="no-referrer" external
          >This is a sample link with a referrerpolicy.</GcdsLink
        >
      </p> */}
      {/* <p>
        <GcdsLink href="" onClick='window.alert("Thank you!")'
          >Click me!</GcdsLink
        >
      </p> */}
      <p><strong>Notes</strong></p>
      <p>SSR package build doesn't like somethings about this component, not sure what yet. :thinking:</p>
  </div>
);