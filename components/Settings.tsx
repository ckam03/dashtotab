import React, { useState } from 'react';
import SettingsMenu from './SettingsMenu';

interface IconProp {
  icon: any;
}

//Settings Button
const SettingsToggle: React.FC<IconProp> = ({ icon,children }) => {
      const [open, setOpen] = useState<boolean>(false);
      return (
        <>
          <div className="cursor-pointer w-6 h-6" onClick={() => setOpen(!open)}>
            {icon}
          </div>
          {open && children}
        </>
      );
}
const Settings = () => {
  return (
    <>
    <SettingsToggle icon={<svg
        className="h-6 w-6 text-gray-300 hover:text-gray-50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>} 
      >
        <SettingsMenu />
      </SettingsToggle>
    </>
  );
};

export default Settings;
