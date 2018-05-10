module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["KTestCognitor"] = {
            host: process.env.EndPoint_rdsKTestCognitor,
            port: process.env.Port_rdsKTestCognitor,
            user: process.env.User_rdsKTestCognitor,
            password: process.env.Password_rdsKTestCognitor,
            database: "KTestCognito",
        };
    };