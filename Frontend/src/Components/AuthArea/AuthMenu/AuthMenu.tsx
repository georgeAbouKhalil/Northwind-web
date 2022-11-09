import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Unsubscribe } from "redux";
import UserModel from "../../../Models/userModel";
import { authStore } from "../../../Redux/Store";
import "./AuthMenu.css";

interface AuthMenuState {
	user: UserModel;
}

class AuthMenu extends Component<{}, AuthMenuState> {

    private unsubcribeMe: Unsubscribe;

    public componentDidMount() {

        this.setState({ user: authStore.getState().user });

        this.unsubcribeMe = authStore.subscribe(() => {
            const user = authStore.getState().user;
            this.setState( {user} );
        });
    }

    public render(): JSX.Element {
        return (
            <div className="AuthMenu">
                {/* this is if */}
                { !this.state?.user && 
                <> 
                    <span>Hello Guest</span>
                    <span> | </span>
                    <NavLink to={"/login"}>Login</NavLink>
                    <span> | </span>
                    <NavLink to={"/register"}>Register</NavLink>
                </>
                }
                {/* this is the else */}
                { this.state?.user && 
                <> 
                    <span>Hello {this.state.user.firstName + " " + this.state.user.lastName}</span>
                    <span> | </span>
                    <NavLink to={"/logout"}>Logout</NavLink>
                    
                </>
                }
            </div>
        );
    }

    componentWillUnmount(): void {
        this.unsubcribeMe();
    }
}

export default AuthMenu;
