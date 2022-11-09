import "./Loading.css";
import loadingImage from "../../../Assets/Images/loading.gif";

function Loading(): JSX.Element {
    return (
        <div className="Loading">
			<img src={loadingImage} />
        </div>
    );
}

export default Loading;
