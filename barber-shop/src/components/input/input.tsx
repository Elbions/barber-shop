import styles from './input.module.scss';
import { HTMLInputTypeAttribute, InputHTMLAttributes, useState  } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
  }
export function Input(props: Props) {
    return (
        <div className={styles.container}>
            <input className={styles.input}></input>
        </div>
    )
}