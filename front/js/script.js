//donnée utilisateur
const userData = {
    user_name : "",
    api_key : "",
    api_private_key : ""
}
//faire une vérification RegExp ici pour augmenter la sécurité
send_btn.addEventListener("click", () =>{
    userData.user_name = user_name.value;
    userData.api_key = api_key.value;
    userData.api_private_key = api_private_key.value;
    console.log(userData);
})
