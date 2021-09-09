let checkToken = (req, res, next) => {
    let token = req.headers.token;
    (token) ? (token == "Audumbar") ? next() : res.send({ error: true, message: "Token not valid" })
        : res.send({ error: true, message: "Token not provided" });
}

module.exports = checkToken;