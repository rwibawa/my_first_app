// See the shakacode/shakapacker README and docs directory for advice on customizing your rspackConfig.
const { generateRspackConfig } = require('shakapacker/rspack')

if (process.env.SERVER_BUNDLE_ONLY) {
	module.exports = require('../webpack/serverWebpackConfig')
} else {
	module.exports = generateRspackConfig()
}
