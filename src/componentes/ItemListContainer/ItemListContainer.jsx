import { useEffect, useState } from "react"

import { Loading } from "../Loading/Loading"
import { mFetch } from "../../utilities/mFetch"
import { ItemList } from "../ItemList/ItemList"
import { collection, getDocs, getFirestore } from 'firebase/firestore' 
// import { Filter } from "../Filter/Filter"
// import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    // const { category } = useParams()
  

    // useEffect(()=>{
    //     mFetch() 
    //     .then( resultado => {
    //         setProducts(resultado)
    //     })
    //     .catch( error => console.log(error) )
    //     .finally(()=> setIsLoading(false))
    // }, [])
    
    // console.log(products)

   

    useEffect(()=> {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'products')

        getDocs(queryCollection)
            .then(res => setProducts( res.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false))
    }, [])
    
    
    return(
        <div> 
                 {/*<Filter> { handleProductFiltered } </Filter>*/}

                { isLoading ? 
                    <Loading />
                :
                    <>
                    {/* filterState === '' */}
                        <ItemList products={products} />
                    
                    </>
                }
        </div>
    )
}


