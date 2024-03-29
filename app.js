const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')


//POST请求处理data
const getPostData = (req) =>{
    const promise = new Promise((resolve,reject)=>{
            if(req.method !== 'POST'){
                resolve({})
                return
            }
            if(req.headers['content-type'] !== 'application/json'){
                resolve({})
                return
            }
             //接收数据
                let postData = '';
                req.on('data',chunk =>{
                    postData += chunk.toString()
                    
                })
                req.on('end',()=>{
                    console.log(postData);
                    res.end('Hello world') //在这里返回，应为是异步
                    if(!postData){
                        resolve({})
                        return
                    }
                    resolve(
                        JSON.parse(postData)
                    )
                })
    })
    return promise
}


const serverHandle = (req,res) =>{
    //设置返回格式 json
    res.setHeader('Content-type','application/json')
    //获取path    
    const url = req.url;
     req.path = url.split('?')[0];

     //解析query
     req.query = querystring.parse(url.split('?')[1])


     //处理 post data
     getPostData(req).then(postData =>{
        req.body = postData;
         //处理 bolg 路由
    const blogData = handleBlogRouter(req,res)
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }
    })
   

      //处理 user 路由

      const userData = handleUserRouter(req,res)
      if(userData){
          res.end(
              JSON.stringify(userData)
          )
          return
      }

      //    未命中路由，返回404
      res.writeHead(404,{'Content-type':"text/plain"})
      res.write('404 Not Found\n')
      res.end()
   
}

module.exports = serverHandle