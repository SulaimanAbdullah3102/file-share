
import Product from "../Product";
import { useEffect, useState } from "react";
const Macbook = () => {
  
    const [allproducts , setallProdcuts] = useState([]); 

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setallProdcuts(data))
    },[])
    console.log(allproducts);

    const product = allproducts.filter(product => product.category == 'MacBook');


    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    product.map(allproduct => <Product key={allproduct.product_id} allproduct={allproduct}></Product>)
                }
            </div>
        </div>
    );
};

export default Macbook;