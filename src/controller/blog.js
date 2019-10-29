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

module.exports = {
    getList,
    getDetail
}