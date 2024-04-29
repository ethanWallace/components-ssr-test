'use client';

import { GcdsErrorSummary, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

const error = {
  "#red": "This has an error",
  "#blue": "This also has an error"
};

export const ErrorSummary: FC = () => (
  <div>
    {/* <GcdsHeading tag="h2">ErrorSummary</GcdsHeading> */}
    
    <GcdsErrorSummary
      heading="Custom error summary"
      errorLinks='{"#red": "This has an error","#blue": "This also has an error"}'
    ></GcdsErrorSummary>

    <p><strong>Notes</strong></p>
    <p>Some reason passing an object to errorLinks isn't working. <strong>Look into it!</strong></p>
    <p>Also try using the listen attribute below in a full form example.</p>
  </div>
);