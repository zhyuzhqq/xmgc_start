/*所有设置参数
必须在app文件夹外面有合法的xcfg.json用以保存私密参数
xcfg文件json的读写功能
*/

var _cfg = {};

//全局app路径
global.__path = $path.dirname(require.main.filename);

//全局错误代码
var __errCode = global.__errCode = {
    APIERR: 8788, //API接口异常，未知错误
    NOTFOUND: 4312, //找不到目标
};

//正则表达式
_cfg.regx = {
    phone: /^1\d{10}$/,
    phoneCode: /^\d{6}$/,
    pw: /^[0-9a-zA-Z]{32}$/, //md5之后的格式
    nick:/^[a-zA-Z\u0391-\uFFE5]+[0-9a-zA-Z\u0391-\uFFE5\.]{2,17}$/,//昵称，非数字开头3~18位
};

//各种长度持续时间(秒)
_cfg.dur = {
    phoneCode: 3600,//手机验证号码过期时间1小时
    browserUkey: 30 * 24 * 60 * 60 * 1000,//浏览器端m_ukey存放1个月
};



//导出模块
module.exports = _cfg;
