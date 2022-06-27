//donnée utilisateur
const userData = {
    user_name : "",
    userId : "",
    pnl : 0
}
//faire une vérification RegExp ici pour augmenter la sécurité
send_btn.addEventListener("click", () =>{
    userData.user_name = user_name.value;
    userData.userId = u_id.value;
    const promise01 = fetch("http://localhost:5500/posts",{
                method: "POST",
                body: JSON.stringify({
                    "user": user_name.value,
                    "userid" : u_id.value,
                    "pnl" : 0
                }), 
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
            .then(data => {
              

        })
        alert("Enregistrement effectué !");
})




