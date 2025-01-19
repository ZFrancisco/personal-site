import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group gap = "s" justify="right" mt="s">
      <ActionIcon color='yellow' onClick={() => setColorScheme('light')}> <IconSun /> </ActionIcon>
      <ActionIcon color='violet' onClick={() => setColorScheme('dark')}> <IconMoon /> </ActionIcon>
      <Button variant = "light" radius="l" color = "cream" size = "xs" onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
