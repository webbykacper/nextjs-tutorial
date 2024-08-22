"use client"
import { useRouter } from "next/navigation";

export default function Order() {
    const router = useRouter();

    const order = () => {
        const random = Math.floor((Math.random() * 2));
        
        if(random) {
            const confirmation = confirm("Zostaniesz przekierowany do strony głównej!");
            if(confirmation)
                router.push('/');
        }
    }

    return (
        <button onClick={order}> Place order </button>
    )
}