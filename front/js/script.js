//donnée utilisateur
const userData = {
    user_name : "",
    userId : "",
}
//faire une vérification RegExp ici pour augmenter la sécurité
send_btn.addEventListener("click", () =>{
    userData.user_name = user_name.value;
    userData.userId = u_id.value;
    console.log(userData);
})


