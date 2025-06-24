import { Link } from 'react-router-dom';

import { SocialMediaProps } from './social-media.types';
import styles from './social-media.module.scss';

const SocialMedia= ({ onLinkClick, className, socialMediaLinks }: SocialMediaProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <ul className={styles.list}>
        {socialMediaLinks.map(({ href, Icon, label, className: customLink }) => (
          <li key={href} className={styles.item}>
            <Link onClick={onLinkClick} to={href} className={`${styles.link} ${customLink ? styles[customLink] : ''}`} target='_blank'>
              <Icon aria-label={label} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
