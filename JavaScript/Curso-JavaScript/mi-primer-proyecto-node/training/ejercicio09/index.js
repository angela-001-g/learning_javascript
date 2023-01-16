const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service:'user-service'},
    transports: [
        //
        // - Write all logs with importance level 'error' or less to 'error.log'
        // - Write all logs with importance level 'info' or less to 'combined.log'
        //

        new winston.transports.File({ filename: 'error.log', level: 'error'}),
        new winston.transports.File({ filename: 'combined.log'}),
    ],
});

module.exports = logger;
try {
    function newError(){
        logger.log({
            level: 'error',
            message: 'Este es un error perzonalizado'
        })
        
    }
    
    newError(logger.error('Esto es un error personalizado')); 
} catch(e){
    console.error("Esto es otro error")
}
