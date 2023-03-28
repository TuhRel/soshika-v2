import { Photo, Upload, X } from 'tabler-icons-react';

import type { ComponentProps } from 'react';
import type { DropzoneStatus } from '@mantine/dropzone';
import type { Icon as TablerIcon } from 'tabler-icons-react';

type Props = ComponentProps<TablerIcon> & {
  status: DropzoneStatus;
};

export const UploadIcon = ({ status, ...props }: Props) => {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
};