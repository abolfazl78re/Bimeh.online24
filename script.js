
function send(){
let txt=`سلام، درخواست مشاوره رایگان دارم.%0A%0A👤 نام: ${n.value}%0A📱 موبایل: ${p.value}%0A🚗 نوع بیمه: ${t.value}%0A📝 توضیحات: ${m.value}`;
window.open("https://wa.me/989395730450?text="+txt,"_blank");
}
