var JsonReturn = null
async function getServerData (){
    let response = await fetch('http://95.163.222.199:4000/posters?_start=10&_limit=10');

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    console.log(response.json());
    } else {
    console.log("Ошибка HTTP: " + response.status);
    }
}

console.log(getServerData())


