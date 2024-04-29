'use client';

import { GcdsFileUploader, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const FileUploader: FC = () => (
  <div>
    <GcdsHeading tag="h2">FileUploader</GcdsHeading>
    
    <GcdsFileUploader
      uploaderId="form-uploader"
      label="Upload file"
      hint="You can upload multiple files, but they have to be png's."
      accept="image/png"
      multiple
      required
    ></GcdsFileUploader>
    <GcdsFileUploader
      uploaderId="form-uploader2"
      label="File uploader with error message"
      errorMessage="This is an error."
      accept="image/png"
      multiple
    ></GcdsFileUploader>
  </div>
);