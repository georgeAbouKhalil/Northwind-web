import "./BackColorByHour.css";


// This is the higher order component

function BackColorByHour(InnerComponent: Function): Function {


    const style = {
        backgroundColor: getColor()
    }

    function getColor():string{
        const now = new Date();
        let hour = now.getHours();
        if(hour > 12) hour = 24 - hour;
        const hue = Math.floor(hour * 255 / 12);
        const color = `rgb(${hue},${hue},${hue})`;
        return color;
    }



    return function (props: any) {
        return (
            <div className="BackColorByHour Box" style={style}>
                <InnerComponent {...props}/>
            </div>
        );
    }
}

export default BackColorByHour;
