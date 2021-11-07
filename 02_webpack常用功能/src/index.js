import "./css/base.css";
import './css/style.less';
console.log('123');
function main () {
    return 1;
}
console.log(main());
const el = document.createElement("img");
// 使用asset/resource利用require不需要.default, 使用file-loader需要处理
el.src = require('./img/WechatIMG6426.jpeg');
// console.error(require('./img/WechatIMG6426.jpeg'));
document.body.appendChild(el);