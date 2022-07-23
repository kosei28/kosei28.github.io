import { Avatar } from './avatar';
import { Icon } from '@iconify/react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 px-4 py-3 sm:py-4">
      <div className="-mb-2 flex flex-row items-baseline space-x-2 sm:space-x-4">
        <div className="w-8 sm:w-12">
          <Avatar />
        </div>
        <div className="text-2xl font-bold sm:text-3xl">kosei28</div>
        <div className="flex-1"></div>
        <a href="https://twitter.com/kosei_28" target="_blank" rel="noreferrer">
          <Icon icon="fa6-brands:twitter" width="100%" className="w-6 sm:w-8" />
        </a>
        <a href="https://github.com/kosei28" target="_blank" rel="noreferrer">
          <Icon icon="fa6-brands:github" width="100%" className="w-6 sm:w-8" />
        </a>
      </div>
    </nav>
  );
};
