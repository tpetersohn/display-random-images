import express from "express"

let app = express()

app.set("view engine","ejs")

async function getRandomPic(x){

    return await Promise.all(Array.from({length:x}, () => fetch('https://picsum.photos/200/300'))).then((pr) => pr.map((pr) => pr.url))

}
        
app.get('/', (req,res) => {
    
    getRandomPic(10).then((imageUrls) => {

                        const imageHtml = imageUrls.map((v) => `${v} alt="Image description">`);
                        res.render("index", { imageHtml });
    
    })
    
})
   

app.listen(3000)