const itemsSelector = document.querySelector('#items')
const url = `http://localhost:5500/posts`
fetch(url)
.then(response => response.json())
.then(data => {
    const main = document.querySelector("#main")
    data.sort((a,b) => b.pnl - a.pnl)
    console.log(data);
    for(var i = 0; i< data.length ; i++){
        table.innerHTML += `
        <tr>
        <td class="border">${i+1}</td>
        <td class="border">$
        </tr>{data[i].user}</td>
        <td class="border">${data[i].pnl} %</td>
        `
    }
})
.catch(err => {console.log('connexion erreur, message : ' + err);})






