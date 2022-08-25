const urlVerification = (req, res, next) => {
    const {challenge} = req.body;
    res.status(200).json({challenge});
}

module.exports = {urlVerification};