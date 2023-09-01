var currentUrl = window.location.href;
console.log(currentUrl);

// 正则表达式
var regex = /^http:\/\/xjw1.ncst.edu.cn\/login\?[\w=&-]+$/;
var matchResult = regex.test(currentUrl);

if (matchResult) {
    // 是登录页面-js代码填写处
    console.log("是登录页面");

    // 添加事件监听【监测是否加载完成】

    document.addEventListener('DOMContentLoaded', changeLoginStyle());

    // ...
    var loginButton = document.querySelector("#loginButton");
    loginButton.addEventListener('click', () => {
        var n = document.querySelector("#input_username").value;
        var p = document.querySelector("#input_password").value;
        localStorage['name'] = n;
        localStorage['ps'] = p;
    })
    
    // 登入页面样式改变函数
    function changeLoginStyle() {
        // 自动填充
        autoFill();
        // 删除一些元素
        deleteElement();
        // 更改登录页面背景
        changeLoginBackground();
    }

    // _自动填充函数
    function autoFill() {
        var name = localStorage['name'];
        var psWd = localStorage['p'];
        document.querySelector('#input_username').value = name;
        document.querySelector('#input_password').value = psWd;
    }

    // _更改背景（样式）
    function changeLoginBackground() {
        var signPageBackgroundDiv = document.querySelector('body > div');
        signPageBackgroundDiv.style.backgroundImage = 'linear-gradient(to bottom right, #91defe, #99c0f9, #bdb6ec, #d7b3e3, #efb3d5, #f9bccc)';
        signPageBackgroundDiv.style.display = 'flex';
        signPageBackgroundDiv.style.flexDirection = 'column';
        signPageBackgroundDiv.style.alignItems = 'center';
        signPageBackgroundDiv.style.justifyContent = 'center';
        signPageBackgroundDiv.style.height = '100vh';
    }


    // _删除页面不需要元素
    function deleteElement(argument) {

        // 删除'建议浏览器：谷歌、火狐或IE10以上版本'
        // 删除'Copyright@2018 '
        var waitDeleteElement = document.querySelector('#formFooter');
        if (waitDeleteElement) {
            waitDeleteElement.remove();
        }
    }
} else {
    // 不是登录页面-js代码填写处
    console.log("不是登录页面");

    // 更改页面缩放以适配手机
    var metaElement = document.createElement('meta');
    metaElement.setAttribute('name', 'viewport');
    metaElement.setAttribute('content', 'width=device-width, initial-scale=1.0');

    var headElement = document.querySelector('head');
    headElement.appendChild(metaElement);


    // 更改教务系统背景
    // 获取改动div
    var changeDiv = document.querySelector('#page-content-template');
    // 改动changeDiv的样式
    changeDiv.style.backgroundImage = 'url("https://s1.imagehub.cc/images/2023/06/28/1664617426065.jpeg")';
    changeDiv.style.backgroundSize = 'cover';

    // 添加事件监听（保证部分慢加载元素存在后进行更改样式）
    document.addEventListener('DOMContentLoaded', changeStyle());

    //更改内容区块的函数(已废弃)
    // function changeContentBlock(selector_point){
    //     var selected_div = document.querySelector(selector_point);
    //     if (selected_div !== null) {
    //         selected_div.style.backgroundColor = '#ffffff5a';
    //         selected_div.style.borderRadius = '12px';
    //     } else {
    //         console.log('找不到元素！' + selector_point);
    //     }
    // }

    // 更改内容区块的样式的函数
    function changeStyle() {
        // changeContentBlock('.widget-body');
        // changeContentBlock('#page-content-template > div.row > div > div.row > div:nth-child(1) > div:nth-child(3) > div.widget-body');
        // changeContentBlock('#page-content-template > div.row > div > div.row > div:nth-child(1) > div.col-xs-12 > div > div > div.widget-body');
        // changeContentBlock('#page-content-template > div.row > div > div.row > div:nth-child(2) > div > div.widget-box > div.widget-body');
        // changeContentBlock('#page-content-template > div.row > div > div.row > div:nth-child(2) > div > div.widget-box > div.widget-body > div');
        // changeContentBlock('#main-calendar');
        // changeContentBlock('#page-content-template > div.row > div > div.row > div:nth-child(1) > div:nth-child(2) > div.widget-body');
        // changeContentBlock('#page-content-template > div.row > div > div.row > div:nth-child(1) > div:nth-child(2) > div.widget-body > div');
        // 主页信息小窗口的透明化
        var changeWdgetBox = document.querySelectorAll(".widget-body");
        for (var i = 0; i < changeWdgetBox.length; i++) {
            changeWdgetBox[i].style.backgroundColor = '#ffffff5a';
            changeWdgetBox[i].style.borderRadius = '12px';
        }
        changeNavigationBar();
    }

    // 更改导航栏|导航栏部件|
    function changeNavigationBar() {
        var navigationBar = document.querySelector('#navbar');
        navigationBar.style.background = 'linear-gradient(-35deg, #7676E7 9%, #8FF4F1 24%, #59DFAA 42%, #C28AE4, #9D85E7 99%)';
        var navigationSearchBar = document.querySelector('#clickdiv');
        navigationSearchBar.style.background = '#91D5DF';
        navigationSearchBar.style.borderRadius = '4px';
        navigationSearchBar.style.border = '2px solid #618987';
        var navigationCalendar = document.querySelector('#navbar-container > div.navbar-buttons.navbar-header.pull-right > ul > li.light-red > a');
        navigationCalendar.style.background = '#50BED2';
        var navigationBarHeadImage = document.querySelector('#navbar-container > div.navbar-buttons.navbar-header.pull-right > ul > li.light-blue > a');
        navigationBarHeadImage.style.background = '#9FDAE343';
    }


    // -------------------------试验区-------------------------------

}
