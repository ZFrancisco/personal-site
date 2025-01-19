import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Center, Divider, Title } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react';

import '../style/HomePageTheme.css'
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Link } from 'react-router-dom';


export function HomePage() {
  return (
    <>
      <div className='Header'>
        <Title order={1} className='header'>Zackary Francisco</Title>
        <ColorSchemeToggle />
        <Divider size="sm" />
      </div>
      <Tabs variant="pills" radius="md" defaultValue="gallery">
      <Tabs.List>

        <Link to='/about' style = {{textDecoration: 'none'}}>   
          <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
            About 
          </Tabs.Tab>
        </Link>

        <Link to="https://github.com/ZFrancisco" style = {{textDecoration: 'none'}}>
          <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
              GitHub
          </Tabs.Tab>
        </Link>
        
        <Link to='/contact' style = {{textDecoration: 'none'}}>   
          <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
            Contact
          </Tabs.Tab>
        </Link>
        
      </Tabs.List>
    </Tabs>
    </>
  );
}
