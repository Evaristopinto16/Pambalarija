const app = require("./app")

const port = process.env.PORT || 777

app.listen(port, ()=>{
    console.log(`pambaleiroRijo no ar na port ${port}`)
})