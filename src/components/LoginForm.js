import React from 'react';
import styles from '../styles/components/LoginForm.module.scss'

export function LoginForm() {
    return(
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} id="loginForm">
                <p className={styles.welcomeBack}>Bem vindo de volta</p>
                <h1 className={styles.loginToAccount}>Faça login na sua conta</h1>

                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" />

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" />

                <div className={styles.loginOptions}>
                    <div>
                        <input type="checkbox" name="rememberMe"/>
                        <label htmlFor="rememberMe">Lembre de mim</label>
                    </div>

                    <span><a href="/">Esqueceu sua senha?</a></span>
                </div>

            </form>
            
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.loginButton} form="loginForm">Entrar</button>
                <a href="/" className={styles.socialLoginButton}><img src="google.svg"></img>Ou faça login com o Google</a>
            </div>

            <span className={styles.joinUs}>Não tem uma conta?<a href="/">Cadastre-se</a></span>
        </div>
    )
}