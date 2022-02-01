import { HTMLInputTypeAttribute, InputHTMLAttributes, useState  } from 'react';

import styles from './input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
    placeholder?: string;
}
export function Input (props: Props) {
    return (
        <div>
            <input className={styles.input}  {...props}/>
        </div>
    )
}