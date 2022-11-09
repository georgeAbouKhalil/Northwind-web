import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import "./Login.css";

function Login(): JSX.Element {

    const { register, handleSubmit} = useForm<CredentialsModel>();
    const navigator = useNavigate();

    async function submit(Credentials: CredentialsModel) {
        try {
            await authService.login(Credentials);
            notifyService.success("Login succeeds");
            navigator("/Home");
        } catch (error: any) {
            notifyService.error(error);
        }
    }

    return (
        <div className="Login Box">
			<h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <label >Username:</label>
                <input type="text" {...register("username")} />

                <label >Password:</label>
                <input type="Password" {...register("password")} />

                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
