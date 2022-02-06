import photoLogin from '../../assets/login.png';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import styles from './login.module.scss';
import logo from '../../assets/icons/logo.png'
import registerIcon from '../../assets/icons/imgregister.png'
import emailIcon from '../../assets/icons/imgemail.png'
import passwordIcon from '../../assets/icons/imgpassword.png'
export function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginPhotoContainer}>
                <img src={photoLogin}></img>
            </div>
            <div className={styles.loginContainer}>
                <div className={styles.loginLogoContainer}>
                    <img src={logo}></img>             
                    <p>Faça seu login</p>
                </div>
                <div className={styles.loginBox}>
                    <Input icon={emailIcon} placeholder="E-mail" /> 
                    <Input icon={passwordIcon} placeholder='Senha'/>
                    <Button /> 
                    <div className={styles.loginFooter}>
                        <p>Esqueci minha senha</p>
                        <div className={styles.loginRegister}>
                            <p>Criar conta</p>
                            <img src={registerIcon}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}