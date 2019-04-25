const pino = require('pino');

const logger = pino({
	prettyPrint: {
		levelFirst: true
	}
});

logger.info('Test');
