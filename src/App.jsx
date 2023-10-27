import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  //resgatando dados
    // const [products, setProducts] = useState([]);

  //Custom Hook
  const { data: products, httpConfig } = useFetch(url);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url)
  //     const data = await res.json()

  //     setProducts(data)
  //   }

  //   getData();

  // }, [])

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    setName('')
    setPrice('')
    e.preventDefault();

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST")

    //REFATORANDO POST

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // Carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  return (
    <div className="App">
      {/* RESGATE DE DADOS */}
      <h1>HTTP EM REACT</h1>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>
      {/* Enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <span>Preço</span>
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default App;
