const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"游客","menuJump":"列表","tableName":"youke"}],"menu":"游客管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"景点信息","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"景点美食","menuJump":"列表","tableName":"jingdianmeishi"}],"menu":"景点美食管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"美食类型","menuJump":"列表","tableName":"meishileixing"}],"menu":"美食类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"景点攻略","menuJump":"列表","tableName":"jingdiangonglve"}],"menu":"景点攻略管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"特产信息","menuJump":"列表","tableName":"techanxinxi"}],"menu":"特产信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"特产类型","menuJump":"列表","tableName":"techanleixing"}],"menu":"特产类型管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"在线客服","tableName":"chat"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"景点资讯","tableName":"news"}],"menu":"系统管理"},{"child":[{"buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"景点信息列表","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息模块"},{"child":[{"buttons":["查看"],"menu":"景点美食列表","menuJump":"列表","tableName":"jingdianmeishi"}],"menu":"景点美食模块"},{"child":[{"buttons":["查看"],"menu":"特产信息列表","menuJump":"列表","tableName":"techanxinxi"}],"menu":"特产信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"景点攻略","menuJump":"列表","tableName":"jingdiangonglve"}],"menu":"景点攻略管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"景点信息列表","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息模块"},{"child":[{"buttons":["查看"],"menu":"景点美食列表","menuJump":"列表","tableName":"jingdianmeishi"}],"menu":"景点美食模块"},{"child":[{"buttons":["查看"],"menu":"特产信息列表","menuJump":"列表","tableName":"techanxinxi"}],"menu":"特产信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"游客","tableName":"youke"}]
    }
}
export default menu;
