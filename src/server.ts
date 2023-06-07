import { app } from "./app"

const PORT: number = 3000

app.listen(PORT, async () => {
    console.log(`Server is running http://localhost:${PORT}`)
})