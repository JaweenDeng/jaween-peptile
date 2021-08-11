const middleware = {}

middleware['authMiddle'] = require('..\\middleware\\authMiddle.js')
middleware['authMiddle'] = middleware['authMiddle'].default || middleware['authMiddle']

export default middleware
