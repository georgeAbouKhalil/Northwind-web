import { Component } from "react";
import "./RandomBrand.css";
import adidasLogo from "../../../Assets/Images/Shoes/AdidasLogo.png";
import newBalance from "../../../Assets/Images/Shoes/NewBalance.png";
import nikeLogo from "../../../Assets/Images/Shoes/NikeLogo.jpg";
import pumaLogo from "../../../Assets/Images/Shoes/PumaLogo.jpg";
import vansLogo from "../../../Assets/Images/Shoes/VansLogo.jpg";

interface RandomBrandState {
	imgSource: string;
}

class RandomBrand extends Component<{}, RandomBrandState> {

    private timerId: number;

    public constructor(props: {}) {
        super(props);
        this.state = { imgSource: this.getRandomLogo() };
    }

    public componentDidMount(): void {
        this.timerId = window.setInterval(() => this.setState({imgSource: this.getRandomLogo()}),1000); // we nned this funcation to update the dom
    }

    private getRandomLogo(): string{
        const rnd = Math.floor(Math.random() * 5) + 1;
        switch(rnd){
            case 1: return adidasLogo;
            case 2: return newBalance;
            case 3: return nikeLogo;
            case 4: return pumaLogo;
            default: return vansLogo;
        }
    }

    public render(): JSX.Element {
        return (
            <div className="RandomBrand Box">
                <p>
				    <img src={this.state.imgSource} />
                </p>
            </div>
        );
    }

    public componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }
}

export default RandomBrand;
