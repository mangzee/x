import type { ReactElement } from 'react';
import { AppsProvider } from '../contexts/Apps';
import { Desktop } from '../components/Desktop';
import { Icons } from '../components/Icons';
import { MetaData } from '../components/MetaData';
import { Taskbar } from '../components/Taskbar';
import { Windows } from '../components/Windows';

export default function HomePage(): ReactElement {
  return (
    <>
      <MetaData />
      <Desktop>
        <AppsProvider>
          <Icons />
          <Taskbar />
          <Windows />
        </AppsProvider>
      </Desktop>
    </>
  );
}
