export default function Docs({ params }) {
    if(params.slug?.length === 1)
        return <h1> Vieving docs for feature {params.slug[0]} </h1>
    else if(params.slug?.length === 2)
        return <h1> Vieving docs for feature {params.slug[0]} and {params.slug[1]} </h1>
    return <h1> vieving docs  </h1>
}