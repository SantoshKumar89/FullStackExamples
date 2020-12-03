const config = {
    port: process.env.PORT || 3000,
  
    jwt: {
			access_token_secret: "a9c4139d07ffa42751d93414453e53baf93aac1b3ca2eefad694f15602608cbac0c0c809a3adece",
		},
    mongoDB: {
      client: 'mongoDB',
      connection: {
        host: process.env.MONGO_DB_HOST,
        user: process.env.MONGO_DB_USER,
        password: process.env.MONGO_DB_PASS,
        database: process.env.MONGO_DB_NAME,
        charset: 'utf8',
      },
      debug: false,
    },
    logger: {
      level: 'info',
      format: 'tiny',
    },
  };
  
  // Set the current environment or default to 'development'
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  config.env = process.env.NODE_ENV;
  
  module.exports = config;