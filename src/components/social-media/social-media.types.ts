import { ComponentType, SVGProps } from "react";

export type SocialMediaProps = {
  onLinkClick?: () => void;
  socialMediaLinks: {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
    className?: string;
  }[];
  className?: string;
};
