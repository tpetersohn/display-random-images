import express from "express"

let app = express()

async function getRandomPic(x){

    return await Promise.all(Array.from({length:x}, () => fetch('https://picsum.photos/200/300'))).then((pr) => pr.map((pr) => pr.url))

}
        
app.get('/', async (req,res) => {
    
    const imageUrls = await getRandomPic(10);
    res.json(imageUrls)

})
   

app.listen(3000)