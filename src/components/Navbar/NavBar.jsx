import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar(){
    return(
        <>
            <header>
                <nav className={styles.header}>
                    <div className={styles.itensHeader}>
                        <Link to="/">Início</Link>
                        <Link to="/itens">Items</Link>
                    </div>
                    <div>    
                        <Link to="/"><h1>React Stock</h1></Link>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <p>Feito com React Router DOM =D</p>
            </footer>
        </>
    )
}