import { HTMLInputTypeAttribute, InputHTMLAttributes, useState  } from 'react';

import styles from './button.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
    placeholder?: string;
}
export function Button (props: Props) {
    return (
        <div>
          <a className={styles.button}>Entrar </a>
        </div>      
    );
}