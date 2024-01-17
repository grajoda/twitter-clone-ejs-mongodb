const oneDay = 1000 * 60 * 60 * 24;

const cookieConfig = {
    secret: "secret",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}

module.exports = cookieConfig;