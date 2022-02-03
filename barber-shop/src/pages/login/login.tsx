import photoLogin from '../../assets/login.png';
import { Input } from '../../components/input/input';
import styles from './login.module.scss';
export function Login() {
    return (
        <div>
        hello world AAA teste
        <img src={photoLogin}></img>
            <Input placeholder="E-mail" /> 
            <Input placeholder='Senha'/> 
        </div>
    )
}