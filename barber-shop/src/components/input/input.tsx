import { HTMLInputTypeAttribute, InputHTMLAttributes, useState  } from 'react';

import styles from './input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
    icon?: string;
}
export function Input (props: Props) {
    return (
        <div className={styles.inputContainer}>
            <img className={styles.inputIcon} src={props.icon} ></img>
            <input className={styles.input}  {...props}/>
        </div>
    )
}