import User from "../controller/user.controller.js";

class Login{
    static async fazerLogin(){
        const user = document.getElementById("username-input")
        const senha = document.getElementById("password-input")
        const btn = document.querySelector("button")

        btn.addEventListener("click", async (e)=>{
            e.preventDefault()
            const resposta = await User.userLogin({
                "email": user.value,
                "password": senha.value
            })
            if(resposta.message != undefined){
                alert(resposta.message)
            }else{
                localStorage.setItem("@kenzie-habits:user", JSON.stringify(resposta.response))
                localStorage.setItem("@kenzie-habits:token", JSON.stringify(resposta.token))
            }
        })
    }
}

Login.fazerLogin()