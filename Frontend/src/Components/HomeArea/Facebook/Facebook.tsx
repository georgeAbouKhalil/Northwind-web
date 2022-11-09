import css from "./Facebook.module.css";

function Facebook(): JSX.Element {

    //alert(css.LargeText);

    return (
        <div className={css.Facebook + " Box"}>
			<p className={css.LargeText}>Facebook Page : https://www.facebook/northwind</p>
        </div>
    );
}

export default Facebook;
