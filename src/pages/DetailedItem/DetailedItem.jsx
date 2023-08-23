import { Link, useParams } from "react-router-dom";
import products from "../../database.json";
import styles from "./DetailedItem.module.css";

const apagaProduto = () => {}

export default function DetailedItem(){

    const { itemId } = useParams();
    const product = products.filter(p => p.id === +itemId);

    return(
    <div className={styles.container}>
        <div className={styles.detailes}>
            <span className={styles.box}>{product.name}</span>
            <span className={styles.box}><Link to="updateItem"><button>Atualizar</button></Link></span>
            <span className={styles.box}><button style={{backgroundColor:"red"}} onClick={apagaProduto}>Excluir</button></span>
        </div>
        <div className={styles.contents}>
            <div className={styles.content}>Categoria: {product.category}</div>
            <div className={styles.content}>Quantidade em estoque: {product.quantity}</div>
            <div className={styles.content}>Preço: R$ {product.price}</div>
        </div>
        <div>{product.description}</div>
        <span>Criado em: </span><span>Atualizado em:</span>
    </div>
    )
}
