import products from "../../database.json"
import styles from "./Itens.module.css"
import { Link } from "react-router-dom";

const apagaProduto = () => {}

export default function Itens(){
    return(
        <div className={styles.container}>
            <table className={styles.table}>
                <tr className={styles.header}>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
                {products.map( p => 
                    <tr>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.id}</td>
                        <td>{p.category}</td>
                        <td style={{display: 'flex', gap:'5px'}}>
                            <Link to={`detailedItem/${p.id}`}><button style={{backgroundColor: "royalblue"}}>Ver</button></Link>
                            <Link to={`item/${p.id}`}><button>Atualizar</button></Link>
                            <button style={{backgroundColor:"red"}} onClick={apagaProduto}>Excluir</button>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    )
}
