import styles from './Principal.module.css'
import products from '../../database.json'
import { Link } from "react-router-dom";

export default function Principal(){
    const expiringItens = products.filter(p => p.quantity<3);
    const normalItens = products.filter(p=> p.quantity>=3);
    return(
        <>
            <h1 style={{fontSize:'50px'}}>Dashboard</h1>
            <div className={styles.containerHeader}>
                <div className={styles.itemHeader}>
                    <h3 className={styles.titulo}>Diversidade de Itens</h3>
                    <h1 className={styles.conteudo}>{products.length}</h1>
                </div>
                <div className={styles.itemHeader}>
                    <h3 className={styles.titulo}>Inventário Total</h3>
                    <h1 className={styles.conteudo}>{products.reduce((quantidadeTotal,atual) => atual.quantity+quantidadeTotal,0)}</h1>
                </div>
                <div className={styles.itemHeader}>
                    <h3 className={styles.titulo}>Itens Recentes</h3>
                    <h1 className={styles.conteudo}>{normalItens.length}</h1>
                </div>                
                <div className={styles.itemHeader}>
                    <h3 className={styles.titulo}>Itens Acabando</h3>
                    <h1 className={styles.conteudo}>{expiringItens.length}</h1>
                </div>
            </div>
            <div className={styles.containerBody}>
                <table className={styles.itemBody}>
                    <tr style={{backgroundColor: 'black'}}>
                        <th>Itens Recentes</th>
                        <th>Ações</th>
                    </tr>
                    {normalItens.map(p=>
                        <tr>
                            <td>{p.name}</td>
                            <td><Link to={`../itens/detailedItem/${p.id}`}><button style={{backgroundColor:'white'}}>Ver</button></Link></td>
                        </tr>
                    )}
                </table>
                <table className={styles.itemBody}>
                    <tr style={{backgroundColor: 'black'}}>
                        <th>Itens Acabando</th>
                        <th>Qtd</th>
                        <th>Ações</th>
                    </tr>
                    {expiringItens.map(p=>
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.quantity}</td>
                            <td><Link to={`../itens/detailedItem/${p.id}`}><button style={{backgroundColor:'white'}}>Ver</button></Link></td>
                        </tr>
                    )}
                </table>
            </div>
        </>
    )
}
