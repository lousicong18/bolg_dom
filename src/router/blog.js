const { getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog')
//数据格式化
const {SuccessModel,ErrorModel} = require('../model/resModel')




const handleBlogRouter = (req, res) =>{
    const method = req.method;

    //获取博客列表
    if(method === 'GET' && req.path  === '/api/blog/list'){
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author,keyword)

        return new SuccessModel(listData)
    }

    //获取博客详情
    if(method === 'GET' &&req.path  === '/api/blog/detail'){
        const id = req.query.id
        const listData = getDetail(id)
        return new SuccessModel(listData)
    }


   

   //新建一篇博客
   if(method === 'POST' && req.path === '/api/blog/new'){
       const data = newBlog(req.body)
       return new SuccessModel(data)
    }

    //更新博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        const result = updateBlog(req.body)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('更新博客失败')
        }
    
    }

    //删除一篇博客
    if(method === 'POST' && req.path === '/api/blog/del'){
        const data = delBlog(req.body)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('删除博客失败')
        }
    }
}

module.exports = handleBlogRouter
