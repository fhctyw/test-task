require('dotenv').config();
const express = require('express');
const cors = require('cors');
const organizationPackageRoutes = require('./src/api/routes/organization-package-route');

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//     console.log(`Middleware:`);
//     console.log(req.body);
//     next();
// });

app.use('/api/v1', organizationPackageRoutes);

app.listen(port, () => {
    console.log(`Server was running on ${port}`);
});