import "./Specials.css";

//Conditional Rendering

function Specials(): JSX.Element {
    return (
        <div className="Specials Box">
			

            {isWeekend() ? "pizza |" : "Pasta |"}

            { isWeekend() && "Fish and Chips |" }

            { isWeekend() || "Sushi |" }

        </div>
    );
}

function isWeekend(): boolean{
    const now = new Date();
    const dayOfWeed = now.getDate() + 1 ; //Sunday = 1 , Monday = 2...
    return dayOfWeed >= 6;
}

export default Specials;
