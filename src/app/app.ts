import 'express-async-errors'
import express,{json} from 'express'
import cors from 'cors';

import router from '../routes/mainRouter.js'

const app = express();

app.use(cors())
app.use(json())
app.use(router)

export default app;