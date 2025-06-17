import { LinkProps } from './link.types';
import styles from './link.module.scss';

const Link = ({ text, className, href, color = 'white' }: LinkProps) => {
  const classKey = color;
  const colorClass = styles[classKey] || '';

  return (
    <a className={`${styles.root} ${colorClass} ${className}`} href={href} target='_blank'>
      {text}
    </a>
  )
}

export default Link;
