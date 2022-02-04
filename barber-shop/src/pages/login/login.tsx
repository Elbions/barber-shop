import photoLogin from '../../assets/login.png';
import { Input } from '../../components/input/input';
import styles from './login.module.scss';
import logo from '../../assets/icons/logo.png'
import emailIcon from '../../assets/icons/imgemail.png'
import passwordIcon from '../../assets/icons/imgpassword.png'
export function Login() {
    return (
        <div>
            <img src={logo}></img>
            <img src={photoLogin}></img>
            <p>Faça seu login</p>
            <div>
                <Input icon={emailIcon} placeholder="E-mail" /> 
                <Input icon={passwordIcon} placeholder='Senha'/> 
            </div>
        </div>
    )
}