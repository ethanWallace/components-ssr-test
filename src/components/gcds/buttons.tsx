'use client';

import { GcdsButton, GcdsHeading } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Buttons: FC = () => (
  <div>
    <GcdsHeading tag="h2">Buttons</GcdsHeading>
    
    <GcdsButton type="submit" name="submit" buttonId="submit" buttonRole="primary">
      Primary Submit
    </GcdsButton>
    <GcdsButton onGcdsBlur={(e: any) => {alert(e)}} type="button" name="button" buttonId="button" buttonRole="secondary">
      Secondary Button
    </GcdsButton>
    <GcdsButton type="reset" name="reset" buttonId="reset" buttonRole="danger">
      Danger Reset
    </GcdsButton>
    <GcdsButton type="link" name="link" buttonId="link" buttonRole="secondary" href="#red">
      Secondary Link
    </GcdsButton>
  </div>
);