# Codhelp
Repository progetto IS "Codhelp"

# Setup

After cloning the repository you have to do the following rules:

1. Install NodeJS and npm;
2. Install all the libraries running the following command in the project directory: `npm install`;
3. Run the following instruction in the project directory to start the server: `npm start`;
4. Your server will be available at ('localhost:3000')[http://localhost:3000].


# New routes

In order to add new routes with views, do the following steps:

1. Create a new route (e.g. `my_route.js`) in the directory *routes*;
2. Create a new view (e.g. `my_view.ejs`) in the directory *views*;
3. Import the route (i.e. `const myRoute = require('./routes/my_route'); `) in the file *app.js*;
4. Make the route available in the application doing `app.use('/my_route_address', myRoute);`;
5. Have fun.

# Technologies

- Node.js;
- Express;
- EJS;
- Morgan (logger);
- Mocha (unit test);
- Postman (test).

