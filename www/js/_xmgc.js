/*每个模块都应该引入的js脚本,需要jquery和bootstrap支持
自动创建顶部和底部元件*/
console.log('start/_xmgc.js:loading...');
if (!_xmgc) {
    /**
     * 全局变量
     * @public
     */
    var _xmgc = {};
};

(function() {
    //顶部导航
    var botbar = $('<div id="navbar" class="navbar navbar-default navbar-fixed-bottom nav nav-tabs xmgcNavBar" style="height:6rem;z-index:10"></div>');
    var botbtns = botbar.btns = $('<div class="nav nav-pills" style="height:100%"></div>').appendTo(botbar);

    //添加底部模块导航按钮
    var navModules = {
        'welcome': {
            name: '欢迎',
            path: 'start/web/welcome/',
            icon: 'fa fa-home',
        },
        'start': {
            name: '开始',
            path: 'start/web/index.html',
            icon: 'fa fa-tasks',
        },
        'doc': {
            name: '文档',
            path: 'start/web/doc/',
            icon: 'fa fa-book',
        },
        'item1': {
            name: '未指定',
            path: 'start/web/welcome/undefined.html',
            icon: 'fa fa-bookmark',
        },
        'more': {
            name: '更多',
            path: 'start/web/welcome/more.html',
            icon: 'fa fa-gift',
        },
    };

    for (var attr in navModules) {
        var mod = navModules[attr];
        botbtns[attr] = $('<li role="presentation" style="width:20%;text-align:center;margin:0;border-right:1px solid #DDD;"><a style="height:6rem;border-radius:0" href="http://m.xmgc360.com/' + mod.path + '">' + '<div class="' + mod.icon + '" style="font-size:3rem"></div><div style="font-size:1rem">' + mod.name + '</div></a></li>').appendTo(botbtns);

        //从当前url判断是否激活
        var onact = false;
        if (location.href.indexOf('http://m.xmgc360.com/' + mod.path) != -1) {
            onact = true;
        };
        if (location.href == 'http://m.xmgc360.com/' && attr == 'welcome') {
            onact = true;
        };

        if (onact) {
            botbtns[attr].attr('class', 'active');
        } else {
            botbtns[attr].attr('class', '');
        };
    };



    /**
     * 底部导航栏
     * @private
     * @property bottomNavBar
     */
    _xmgc.bottomNavBar = botbar;


    /**
     * 添加底部导航栏
     * @private
     * @method addBottomNavBar
     * @return {jqueryObj} _xmgc.bottomNavBar
     */
    _xmgc.addBottomNavBar = function() {
        $('body').append(_xmgc.bottomNavBar);
        return _xmgc.bottomNavBar;
    };



    /**
     * 添加色彩样式
     * @private
     * @method addNavBarStyle
     * @param {string}  clr 颜色字符串
     * @return {jqueryObj} _xmgc.bottomNavBar
     */
    _xmgc.addNavBarStyle = function(clr) {
        if (!clr) clr = '#00bfa5';
        var stl = $('<style></style');
        stl.append('.nav-pills li a{color: ' + clr + ';text-decoration: none;}');
        stl.append('.xmgcNavBar .nav-pills li.active a{color: #FFF;background-color: ' + clr + ';}');
        stl.append('.xmgcNavBar .nav-pills li.active a:hover{color: #FFF;background-color: ' + clr + ';}');
        _xmgc.navBarStyle = stl;
        $('body').append(_xmgc.navBarStyle);
        return _xmgc.navBarStyle;
    };

    /**
     * 添加导航栏，可选顶部底部或全部
     * @private
     * @method addNavBar
     * @param {Object} str='top/bottom/both'
     * @return {Array} description
     */
    _xmgc.addNavBar = function(str) {
        var res = [];
        res.push(_xmgc.addNavBarStyle());
        if (str == 'bootom' || str == 'bot' || str == 'both') {
            res.push(_xmgc.addBottomNavBar());
        };
    };


    //自动添加导航栏，默认添加底部
    if (_xmgc.usrNavBar == undefined) {
        _xmgc.usrNavBar = 'both';
    };
    $(document).ready(function() {
        _xmgc.addNavBar(_xmgc.usrNavBar);
    });
})();
