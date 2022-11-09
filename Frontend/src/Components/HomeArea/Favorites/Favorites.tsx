import { Component, SyntheticEvent } from "react";
import "./Favorites.css";

class Favorites extends Component {

    private showItem1(): void{
        const item1 = "Chocolate";
        alert("Favorite: " + item1);
    }

    private showItem2(args: SyntheticEvent): void{
        console.log(args);
        console.log(args.target);        
        const item2 = "Red Wine";
        alert("Favorite: " + item2);
    }

    private item3 = "Sushi";

    private showItem3 = () => {
        
        alert("Favorite: " + this.item3); //same "this" outside will be the "this" inside.
    }

    public render(): JSX.Element {
        
        return (
            <div className="Favorites Box">
                <p>
				    <button onClick={this.showItem1}>Favorite 1</button>
                    <button onClick={this.showItem2}>Favorite 2</button>
                    <button onClick={this.showItem3}>Favorite 3</button>
                </p>
            </div>
        );
    }
}

export default Favorites;
