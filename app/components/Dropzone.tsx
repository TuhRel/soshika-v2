import { Group, Text } from '@mantine/core';

import type { DropzoneStatus } from '@mantine/dropzone';
import type { MantineTheme } from '@mantine/core';
import { UploadIcon } from './UploadIcon';
import { getIconColor } from '~/helpers/color';

export const Dropzone = (status: DropzoneStatus, theme: MantineTheme) => (
  <Group
    position='center'
    spacing='xl'
    style={{ minHeight: 220, pointerEvents: 'none' }}
  >
    <UploadIcon
      status={status}
      style={{ color: getIconColor(status, theme) }}
      size={80}
    />

    <div>
      <Text size='xl' inline>
        Drag images here or click to select files
      </Text>
      <Text size='sm' color='dimmed' inline mt={7}>
        Attach as many files as you like, each file should not exceed 5mb
      </Text>
    </div>
  </Group>
);