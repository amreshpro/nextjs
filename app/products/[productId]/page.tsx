"use client"
import { useParams } from "next/navigation"

const ProductById = ({params}:{params:{productId:string}}) => {
    // const {productId} = useParams()
    const {productId} = params
  return (
    <div>My Product {productId}</div>
  )
}
export default ProductById