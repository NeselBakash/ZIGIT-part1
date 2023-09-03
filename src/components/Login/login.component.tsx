import { useRef, useState } from "react";
import { useForm } from "react-hook-form"
import { LoginModel } from "../../Models/login.model";
import { LoginApi } from "../../services/loginApi";
import Cookie from "../../services/cookies";
import { useNavigate } from "react-router-dom";
import "./login.css"


export default function Login() {
    const [user, setUser] = useState<LoginModel>(0 as any as LoginModel);

    const [imgSrc, setImgSrc] = useState("");
    const [btnTxt, setBtnTxt] = useState("Log In");

    const { login } = LoginApi()

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors, isValid }
    } = useForm({ defaultValues: { user }, mode: "onChange" });

    function setLoading(isLoading: boolean) {
        if (isLoading) {
            setImgSrc("loading.gif");
            setBtnTxt("Loading...");
        } else {
            setImgSrc("");
            setBtnTxt("Log in");
        }
    }


    async function onLogin(user: LoginModel) {

        const resList = await login(user.email, user.password);

        Cookie.set('token', resList[0].token);

        return resList[0].personalDetails;

    };

    const onSubmit = ({ user }: { user: LoginModel }) => {
        setLoading(true);


        onLogin(user).then(res => {
            if (Cookie.get('token')) {
                sessionStorage.setItem('user', JSON.stringify(res));
                navigate("/info");
            }
            else {
                navigate("/");
            }
            setLoading(false);
        });
    };


    // console.log(watch("user")); // watch input value by passing the name of it


    return (
        <div className="container">
            <h1>Log In:</h1>
        
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email address:
                    <input type="email"
                        {...register("user.email", {
                            required: "Email is required.",
                            pattern: {
                                value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                                message: "Please enter a valid email address."
                            }
                        })}
                        aria-invalid={errors.user?.email ? 'true' : 'false'} placeholder="Enter email here..."
                    />

                    {errors.user?.email && (
                        <span role="alert" className="errorMsg">{errors.user.email.message}</span>
                    )}

                </label>

                <label>
                    Password:
                    <input type="password" {...register("user.password", {
                        required: "Password i required.",
                        pattern: {
                            value: /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}/,
                            message: "Please ensure your password contains at least one capital letter and at least one number."
                        },
                        minLength: {
                            value: 8,
                            message: "Your password must be at least 8 characters long."
                        }
                    })} placeholder="Enter password here..."
                    />


                    {errors.user?.password?.message && (
                        <span className="errorMsg">{errors.user.password.message}</span>
                    )}
                </label>

                <p>
                    <button className={isValid ? 'button' : 'disabledBtn'} disabled={!isValid} type="submit">
                        {imgSrc && <img className="loadingImg" src={imgSrc} />}
                        {btnTxt}
                    </button>
                </p>

            </form>

        </div>
    )
}

//register - a callback function adding the inputs to the hook.
//handleSubmit - will handle validation befor sending the form.