interface MenuItemProps {
    name: string;
    icon: any;
    itemType: any;
}

const SettingsMenuItem: React.FC<MenuItemProps> = ({ name, icon, itemType }) => {

  return (
    <div className="flex items-center justify-between border rounded-xl bg-gray-100 px-3 py-2">
      <li className="list-none flex items-center">
          {icon}
        <span className="ml-2">{name}</span>
      </li>
      {itemType}
    </div>
  );
};

export default SettingsMenuItem;
