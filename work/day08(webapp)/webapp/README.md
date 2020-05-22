### json的规范
    ECMA404规范;(http://www.ecma-international.org/);
    ECMA404规范定义了josn是一个类似于js对象的字符串:
        所有的key必须使用双引号进行包裹
        所有对象的最后一个键值对不能加逗号
        josn文件中是不可以添加注释的


### 项目的初始化
    1. 使用@vue/cli创建项目
            vue -V
            vue create webapp
            npm run serve
    2. 添加vue.config.js配置文件,对脚手架的环境进行一些配置
            module.exports={
                lintOnSave:false,
                devServer:{
                    open:true
                }
            }
    3. 安装哈士奇
            npm i husky -D
            定义git的钩子: 修改package.json文件
                "husky":{
                    "hooks":{
                      "pre-commit":"npm run lint"
                    }
                }
