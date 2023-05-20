import { useEffect, useState } from "react"

import { Loading } from "../Loading/Loading"
import { mFetch } from "../../utilities/mFetch"
import { ItemList } from "../ItemList/ItemList"
// import { Filter } from "../Filter/Filter"
// import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // const { category } = useParams()
  

    useEffect(()=>{
        mFetch() 
        .then( resultado => {
            setProducts(resultado)
        })
        .catch( error => console.log(error) )
        .finally(()=> setIsLoading(false))
    }, [])
    
    console.log(products)
    
    // console.log(category)

    // const handleProductFiltered = ({ filterState, handleFilterChange}) => (
    //     <div>
    //         <h2>Buscar producto</h2>
    //         {filterState}
    //         <input type="text" value={filterState} onChange={handleFilterChange} />
    //     </div>
    // )

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
