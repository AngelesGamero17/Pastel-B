import dotenv from "dotenv"

dotenv.config();

export default{
    // server config
    APP_PORT : process.env.APP_PORT || 4000,
    APP_HOST : process.env.APP_HOST || "localhost",
    //database config
    DB_NAME : process.env.DB_NAME ||"bd_pastel",
    DB_USER : process.env.DB_USER ||"pastel",
    DB_PASS : process.env.DB_PASS ||"Pastel.",
    DB_HOST : process.env.DB_HOST ||"localhost",
    API_VERSION:process.env.API_VERSION||'v1',
    JWT_SECRET:'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh'


};