const pkg = require('./package.json')
const config = require('./config.json')
const path = require('path')
const express = require('express')
const debug = require('debug')(`${pkg.name}:server`)

const server = express()
const distDirectory = path.resolve(config.directories.dist)

module.exports = () => {
	debug('booting web server')

	return new Promise((resolve, reject) =>
		server
			.set('port', process.env.PORT || 9000)
			.use(express.static(distDirectory))
			.get('*', (req, res) => {
				debug(`${req.method} ${req.url}`)
				res.sendFile(`${distDirectory}/index.html`)
			})
			.listen(server.get('port'), (error) => {
				if (error) reject(error)
				debug(`application is running at http://localhost:${server.get('port')}`)
				resolve()
			})
	)
}
