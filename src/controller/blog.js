//控制器

const getList = (auther, keyword) =>{
    //先返回假数据（格式是正确的）
    return [
        {
            id:1,
            title:'标题A',
            content:'内容A',
            createTime:1546610491112,
            auther:'zhangsan'
        },
        {
            id:2,
            title:'标题A',
            content:'内容A',
            createTime:1546610491112,
            auther:'wangwu'
        },
        {
            id:3,
            title:'标题A',
            content:'内容A',
            createTime:1546610491112,
            auther:'lisi'
        },
    ]
}


const getDetail = (id) =>{
        //先返回假数据
        return [
            {
                id:1,
                title:'标题A',
                content:'内容A',
                createTime:1546610491112,
                auther:'zhangsan'
            },
            {
                id:2,
                title:'标题A',
                content:'内容A',
                createTime:1546610491112,
                auther:'wangwu'
            },
            {
                id:3,
                title:'标题A',
                content:'内容A',
                createTime:1546610491112,
                auther:'lisi'
            },
        ]

}

const newBlog = (blogData = {}) =>{
    console.log('post data:' ,blogData )
    return{
        id:3, //返回新建的菜单
    }
}
const updateBlog = (blogData = {}) =>{
    //blogData.id 需要更新的id号
    //blogData.blogData 更新的内容
    console.log('post data:' ,blogData )
    return true
}
const delBlog = (blogData = {}) =>{
     //blogData.id 需要删除的id号
    console.log('post data:' ,blogData )
    return true
}
//测试
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog

}