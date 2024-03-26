import HeroDomestic from "@/components/Domestics/HeroDomestic"
import LoginForm from "@/components/Login/loginForm"

const Login =()=> {
    return (
        <div>
            <HeroDomestic heading="Login" paragraph={"Home > Login"} />
            <LoginForm/>
        </div>
    )
}
export default Login