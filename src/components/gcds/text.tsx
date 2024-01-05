'use client';

import { GcdsText, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Text: FC = () => (
  <div>
    <GcdsHeading tag="h2">Text</GcdsHeading>
    
    <GcdsText>
      This text is primary text using the default body size. The margin
        bottom is set to "400". The character limit is set to "true" (default
        value) which means that the text will take up a maximum of 65 characters
        per line.
    </GcdsText>

    <GcdsText characterLimit="false">
      This text is primary text using the default body size. The margin
      bottom is set to "400". The characters limit is set to "false" which
      means that the text will take up all available space.
    </GcdsText>

      <GcdsText textRole="secondary">
        This text is secondary text using the default body size. The margin
        bottom is set to "400". The character limit is set to "true" (default
        value) which means that the text will take up a maximum of 65 characters
        per line.
        </GcdsText>

      <div style={{backgroundColor: '#333'}}>
        <GcdsText margin-bottom="0" text-role="light">
          This text is light text using the default body size. The character
          limit is set to "true" (default value) which means that the text will
          take up a maximum of 65 characters per line.
        </GcdsText>
      </div>

      <GcdsText size="caption">
        This text is primary text using the caption size. The margin bottom is
        set to "400". The character limit is set to "true" (default value) which
        means that the text will take up a maximum of 65 characters per
        line.
        </GcdsText>

      <GcdsText>
        This text is primary text using the default body size
         <strong>with some bold text included</strong>. The margin bottom is set
        to "400". The character limit is set to "true" (default value) which
        means that the text will take up a maximum of 65 characters per
        line.
      </GcdsText>

      <GcdsText>
        This text is primary text using the default body size
        <em>with some italic text included</em>. The margin bottom is set to
        "400". The character limit is set to "true" (default value) which means
        that the text will take up a maximum of 65 characters per
        line.
      </GcdsText>
  </div>
);