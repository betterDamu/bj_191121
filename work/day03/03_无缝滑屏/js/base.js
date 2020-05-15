// 1. 加meta标签
// 2. 挑选一个适配方案
// 3. 禁止移动端事件的默认行为
(function (w) {

    w.swiper = {};
    //wrap:移动端开发时的包裹节点
    function init(wrap) {
        //挑选一个适配方案
        var styleNode = document.createElement("style");
        var w = document.documentElement.clientWidth/16;
        styleNode.innerHTML = `html{font-size:${w}px!important}`;
        document.head.appendChild(styleNode)
        //禁止移动端事件的默认行为
        wrap.addEventListener("touchstart",(ev)=>{
            ev = ev || event;
            ev.preventDefault();
        })
    };
    //arr:当前无缝滑屏需要的图片的地址
    function slide(arr){
        var swiperWrap = document.querySelector(".swiper-wrap");//滑屏区域
        if(!swiperWrap){
            throw new Error("页面上缺少swiper-wrap这个滑屏区域")
            return ;
        }

        //根据arr动态的去创建滑屏元素
        var ulNode = document.createElement("ul");//滑屏元素
        ulNode.classList.add("list"); // 给ulNode加class的
        for(var i=0;i<arr.length;i++){
            ulNode.innerHTML+="<li><img src="+(arr[i])+"></li>";
        }
        swiperWrap.appendChild(ulNode);

        var styleNode = document.createElement("style");
        styleNode.innerHTML=".swiper-wrap .list{width:"+(arr.length)+"00%}";
        styleNode.innerHTML+=".swiper-wrap .list li{width:"+(1/arr.length)*100+"%}";
        document.head.appendChild(styleNode);

        //小圆点相关的逻辑
        var ponitWrap = document.querySelector(".swiper-wrap > .point-wrap");
        if(ponitWrap){
            for(var i=0;i<arr.length;i++){
                if (i==0){
                    ponitWrap.innerHTML+="<span class='active'></span>"
                }else{
                    ponitWrap.innerHTML+="<span></span>"
                }
            }
        }

    }
    w.swiper.init =init
    w.swiper.slide=slide

})(window)

