const path = require('path');
const ROOT = path.join(__dirname, '../');

module.exports = {
    appenders: {
        ConsoleLogAppender:{
            type:'console'
        },
        FileLogAppender: {
            type:'file',
            filename:path.join(ROOT, './log/system/system.log'),
            maxLogSize: 500,
            bakups: 10
        },
        MultiFileLogAppender : {
            type: 'multiFile',
            base: path.join(ROOT, './log/application/'),
            property: 'key',
            extension: '.log'
        },
        DateRollingFileAppender: {
            type: 'dateFile',
            filename: path.join(ROOT, './log/access/access.log'),
            pattern: '-yyyyMMdd',
            daysToKeep: 30
        }
    },
    categories: {
        'default': {
            appenders: ['ConsoleLogAppender'],
            level: 'ALL'
        },
        system: {
            appenders: ['FileLogAppender'],
            level: 'ERROR'
        },
        application: {
            appenders: ['MultiFileLogAppender'],
            level: 'ERROR'
        },
        access: {
            appenders: ['DateRollingFileAppender'],
            level: 'INFO'
        }
    }
};