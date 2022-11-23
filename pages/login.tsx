import styles from '../styles/Home.module.css'

function Login() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Login
            </h1>
            <div className={styles.grid}>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" /><br />
            </div>
            <div className={styles.grid}>
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" />
            </div>
            <div className={styles.grid}>
                <button>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;