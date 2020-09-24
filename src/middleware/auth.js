const auth = async (req, res, next) => {
    console.log("auth middleware")
    // res.status(503).send("Site is currently down. Check back soon!")
    next()
}