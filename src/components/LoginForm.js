import React from 'react';
import styles from '../styles/components/LoginForm.module.scss'

import Image from "next/image"
import Link from 'next/link'

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

                    <span><Link href="/">Esqueceu sua senha?</Link></span>
                </div>

            </form>
            
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.loginButton} form="loginForm">Entrar</button>
                <Link href="/">
                    <a className={styles.socialLoginButton}>Ou faça login com o Google</a>
                </Link>
            </div>

            <span className={styles.joinUs}>Não tem uma conta?<Link href="/">Cadastre-se</Link></span>
        </div>
    )
}