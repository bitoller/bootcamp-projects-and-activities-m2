import { app } from "."

const PORT = 3333

app.listen(PORT, () => {
  console.log(`app listen at: http://localhost:${PORT}`)
})