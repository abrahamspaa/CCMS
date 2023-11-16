import Image from 'next/image'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import styles from '@agent-tina-css/app/page.module.css';
import {PageBlocksWelcomeHero} from '@agent-tina-css/tina/__generated__/types';

export default function Hero(props: PageBlocksWelcomeHero) {
  return (
    <div className={styles.description} >
      <div data-tina-field={tinaField(props, 'message')}>
        <TinaMarkdown content={props.message}  />
      </div>
      
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            data-tina-field={tinaField(props, 'image')}
            src={props.image || ''}
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}