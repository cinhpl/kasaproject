import React from "react";
import { useParams } from "react-router-dom";

export default function Housing() {

    const params = useParams()
    console.log(params);
    return (
        <div>        
            <h1>Logements</h1>
        </div>
    )
}