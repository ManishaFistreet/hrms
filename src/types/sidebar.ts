// import { FiHome, FiList, FiUser, FiSettings, FiGrid, FiLock } from 'react-icons/fi';
// import { IconType } from 'react-icons';
export interface SidebarItem {
  icon: string;
  name: string;
  link?: string;
  subItems?: SidebarItem[];
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}
