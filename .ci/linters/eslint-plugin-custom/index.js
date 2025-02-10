const imgWithoutDraggable = require('./rules/img-without-draggable')
const requireId = require('./rules/require-id')

module.exports = {
    rules: {
        'img-without-draggable': imgWithoutDraggable,
        'require-id': requireId
    }
}