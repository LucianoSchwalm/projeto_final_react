import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return(
        <>
            <h1 className={styles.title}>Stock Item</h1>
            <div className={styles.section}>
                <section style={{paddingBottom:'20px'}}><Link to="/itens">Todos os Itens</Link></section>
                <section><Link to="item">Novo Item</Link></section>
            </div>
            <hr />
            <Outlet/>
        </>
    );
}