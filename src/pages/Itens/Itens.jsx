import products from "../../database.json"
import styles from "./Itens.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Itens(){
    const apagaProduto = (id) => {
        setItens((old)=>old.filter(p => p.id != id));
    }

    const [itens,setItens] = useState(products);

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
                {itens.map( p => 
                    <tr>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.quantity}</td>
                        <td>{p.category}</td>
                        <td style={{display: 'flex', gap:'5px'}}>
                            <Link to={`detailedItem/${p.id}`}><button style={{backgroundColor: "royalblue"}}>Ver</button></Link>
                            <Link to={`item/${p.id}`}><button>Atualizar</button></Link>
                            <button style={{backgroundColor:"red"}} onClick={() => apagaProduto(p.id)}>Excluir</button>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    )
}
