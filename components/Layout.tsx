import styles from '../styles/Home.module.css'

const Layout = ({children}:{children:any}) => {
    return (
       <div className={styles.container}>
        <main className={styles.main}>
            <h1>Haha</h1>
            {children}
        </main>
       </div> 
    )
}

export default Layout