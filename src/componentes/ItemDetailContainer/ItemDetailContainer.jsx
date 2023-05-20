import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { Loading } from "../Loading/Loading"
import { mFetch } from "../../utilities/mFetch"

// PAGINA COMPLETA
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { pid } = useParams()

  useEffect(()=>{
    
    mFetch(pid)
    .then(resp => setProduct(resp))
    .catch(err => console.log(err))
    .finally(()=> setIsLoading(false))
  }, [])

  console.log(pid)


  return (
    <div>
      {isLoading ?
        <Loading />
      :
        <>
          <ItemDetail product={product}/>
        </>
      }
    </div>
  )
}
