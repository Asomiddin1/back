const logger = function (req , res , next) {
    console.log('post requst')
    next()
}
module.exports = logger