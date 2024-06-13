async function displayrandompic(){

return await Promise.all(Array.from({length:10}, () => fetch('https://picsum.photos/200/300'))).then((pr) => pr.map((pr) => pr.url))

}

displayrandompic().then(res => console.log(res))