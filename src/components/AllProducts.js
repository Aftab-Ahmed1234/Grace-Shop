import Spinner from 'react-bootstrap/Spinner';
import {useEffect, useState} from "react";
import {useEcommerceData} from "../context/EcommerceContext";
import {APIs} from "../const/APIs";
import axios from "axios";
import {Link} from "react-router-dom";


function AllProducts() {
    const {product,setProducts, error, setError} = useEcommerceData()


    const fetchAllProductsData = async () => {
        await axios.get(APIs.ECOMMERCE.PRODUCTS.ADD_PRODUCT).then(res=> {
            console.log(res)
            setProducts(res.data)
            setError(false)
        }).catch(err=> {
            setError(true)
            console.log(err)
        })
    }

   useEffect(()=> {
       fetchAllProductsData()
   }, [])
    return (
      <>
           <div className="container row all-products" style={{}}>
               {
                   product.length==0 ? <div className={"d-flex my-5 justify-content-center align-items-center"}>
                       {
                           error ? <span className={"text-danger"}>"Error while fetching data from api</span> : <Spinner animation="grow" />
                       }
                   </div>: product.map(p=> {
                       return <div className="col-sm-12 mt-5 pt-5 col-md-12 col-lg-4 "  >
                           <div className="card d-flex my-5 justify-content-center align-items-center mt-5  " style={{width: "20rem", height:"30rem", marginLeft:"8rem"}}  >
                               <img className="card-img-top " style={{width:"20rem", height:"20rem", paddingTop:"2rem", paddingLeft:"2rem", paddingRight:"2rem"}} src={p.image} alt="Card image cap"/>
                               <div className="card-body ">
                                   <h5 className="card-title " style={{fontSize:"16px" , }}>{p.title}</h5>
                                   <p className="card-text mt-2">Price {p.price}</p>
                                   <Link to={`/products/${p.id}`} className="btn btn-dark">Add Cart</Link>
                               </div>
                           </div>
                       </div>
                   })
               }
           </div>
      </>
    );
}

export default AllProducts;