
const path = require("path");
module.exports = {
    devServer:{
        proxy:{
            "/publish":{
                target:"http://movie.miguvideo.com",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{  //覆盖webpack的配置项
        resolve:{ //配置别名
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "@common" : path.resolve(__dirname,"./src/common"),
                "@api" : path.resolve(__dirname,"./src/api"),
                "@components" : path.resolve(__dirname,"./src/components"),
                "@utils" : path.resolve(__dirname,"./src/utils"),
                "@views":path.resolve(__dirname,"./src/views")
            }
        }
    }
}





