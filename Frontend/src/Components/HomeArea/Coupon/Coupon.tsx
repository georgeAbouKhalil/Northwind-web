import { useState } from "react";
import "./Coupon.css";

function Coupon(): JSX.Element {

    //useState return array containing the state value and the funcation to change the value:
    const couponStateArray = useState<string>("");

    //Taking the state value:
    const coupon = couponStateArray[0]; //value
    
    //Taking the funcation to cahnge state value:
    const setCoupon = couponStateArray[1]; //setState for that value

    // Same, but using array destructuring assignment:
    const [price, setPrice] = useState<number>(0);

    function showCoupon(): void{
        setCoupon("Orange Chocolate"); // Async
        setPrice(10.5)
    }




    return (
        <div className="Coupon Box">
			<p>
                <button onClick={showCoupon}>Show Coupon</button>
                <span> {coupon}, Price: {price}</span>
            </p>
        </div>
    );
}

export default Coupon;
