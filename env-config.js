const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.NODE_ENV': prod ? 'production' : 'development',
  'process.env.TEST': process.env.TEST === 'cypress' ? 'cypress' : 'jest',
}
