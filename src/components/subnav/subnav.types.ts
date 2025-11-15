export type SubnavProps = {
  onLinkClick?: () => void;
  navLinks: { label: string; href: string }[];
  className?: string;
};
