import "./RandomShoes.css";
import adidasShoes from "../../../Assets/Images/Shoes/AdidasShoes.png";
import newBalanceShoes from "../../../Assets/Images/Shoes/NewBalance.png";
import nikeShoes from "../../../Assets/Images/Shoes/NikeShoes.png";
import pumaShoes from "../../../Assets/Images/Shoes/pumaShoes.jpg";
import vansShoes from "../../../Assets/Images/Shoes/Vans.png";
import { useEffect, useState } from "react";

function RandomShoes(): JSX.Element {

    const [imageSource, setImageSource] = useState<string>(getRandomLogo());

    useEffect(() => {
        const timerId = window.setInterval(() => setImageSource(getRandomLogo()),1000);

        return () => window.clearInterval(timerId);
    },[])


    
    return (
        <div className="RandomShoes Box">
            <p>
			    <img src={imageSource}/>
            </p>
        </div>
    );
}

function getRandomLogo(): string{
    const rnd = Math.floor(Math.random() * 5) + 1;
    switch(rnd){
        case 1: return adidasShoes;
        case 2: return newBalanceShoes;
        case 3: return nikeShoes;
        case 4: return pumaShoes;
        default: return vansShoes;
    }
}

export default RandomShoes;
