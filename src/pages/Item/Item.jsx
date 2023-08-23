import { Link, useParams } from "react-router-dom";
import products from "../../database.json"
import styles from "./Item.module.css"

export default function Item(){

    const { itemId } = useParams();
    const productDB = products.filter(p => p.id === +itemId);

    const [product, setProduct] = useState({});

    // handleFields(product) => {

    // }

    return(
        <form>
            <div className={styles.container}>
                <div className={styles.inputs}>
                    <label htmlFor="nameItem">Nome</label>
                    <input type="text" name="nameItem" value={product?.name} onChange={() => handleFields()}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="quantity">Quantidade</label>
                    <input type="number" name="quantity" value={product?.quantity}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="price">Preço</label>
                    <input type="number" name="price" value={product?.price}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="category">Categoria</label>
                    <select name="category" value={product?.category}>
                        <option disabled selected>Selecione uma Categoria</option>
                        <option value="Jogos" >Jogos</option>
                        <option value="Cartas">Cartas</option>
                        <option value="Mesas">Mesas</option>
                        <option value="Livros">Livros</option>
                        <option value="Cadeiras">Cadeiras</option>
                        <option value="Produtos">Produtos</option>
                    </select>
                </div >
            </div >
            <div className={styles.flexTextArea}>
                <div>
                    <label htmlFor="Descrição">Descrição</label>
                </div>
                <textarea cols="150" rows="10"></textarea>
            </div>
            <button style={{marginLeft: '20px', backgroundColor: "royalblue"}}>Salvar</button>
        </form>
    )
}
