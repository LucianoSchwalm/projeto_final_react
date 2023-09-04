import { useParams } from "react-router-dom";
import products from "../../database.json"
import styles from "./Item.module.css"
import { useState } from "react";

export default function Item(){

    const { itemId } = useParams();
    const productDB = products.find(p => p.id === +itemId);
    const [product, setProduct] = useState({id:productDB?.id,name:productDB?.name,description:productDB?.description,category:productDB?.category,quantity:productDB?.quantity,price:productDB?.price});
    
    const addProduct = () => {
        setProduct((old)=> ({...old,id: products.length+1}));
        products.push(product);
    }

    const handleSubmit = () => {
        console.log('entrou');
        productDB ? products[product.id-1] = product : addProduct();
    }

    return(
        <form onSubmit={(ev) => ev.preventDefault()}>
            <div className={styles.container}>
                <div className={styles.inputs}>
                    <label htmlFor="nameItem">Nome</label>
                    <input type="text" name="nameItem" value={product?.name} onChange={(e) => setProduct((old)=>({...old,name:e.target.value}))}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="quantity">Quantidade</label>
                    <input type="number" name="quantity" value={product?.quantity} onChange={(e) => setProduct((old)=>({...old,quantity:e.target.value}))}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="price">Preço</label>
                    <input type="number" name="price" value={product?.price} onChange={(e) => setProduct((old)=>({...old,price:e.target.value}))}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="category">Categoria</label>
                    <select name="category" value={product?.category} onChange={(e) => setProduct((old)=>({...old,category:e.target.value}))}>
                        <option disabled>Selecione uma Categoria</option>
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
                <textarea cols="150" rows="10" value={product?.description} onChange={(e) => setProduct((old)=>({...old,description:e.target.value}))}></textarea>
            </div>
            <button style={{marginLeft: '20px', backgroundColor: "royalblue"}} onClick={handleSubmit}>Salvar</button>
        </form>
    )
}
