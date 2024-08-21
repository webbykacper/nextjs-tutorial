import { notFound } from "next/navigation"

export default function Review({ params }) {
    if(parseInt(params.reviewId) > 100)
        notFound();
    
    return (
        <h1> Review {params.reviewId} for product {params.productId} </h1>
    )
} 