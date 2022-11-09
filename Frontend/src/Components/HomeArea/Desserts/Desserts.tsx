import "./Desserts.css";

function Desserts(): JSX.Element {

    const items = [
        {id: 1, name: "Ice Cream"},
        {id: 2, name: "Pavlova"},
        {id: 3, name: "Eclair"},
        {id: 4, name: "Appple pie"},
    ];

    return (
        <div className="Desserts Box">
			Our Desserts: {items.map(item => <span key={item.id}>{item.name} | </span>)}
        </div>
    );
}

export default Desserts;
