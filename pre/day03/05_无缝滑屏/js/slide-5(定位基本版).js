(function (w) {
    w.slide = {};
    function course(arr) {
        //�޷컬���߼�
        var wrapC = document.querySelector(".course-wrap");
        if(!wrapC){
            return;
        }


        //����html�ṹ
        var wrapC = document.querySelector(".course-wrap");
        var ulNode = document.createElement("ul");
        var liNodes = document.querySelectorAll(".course-wrap > .list > li")
        var wrapP = document.querySelector(".course-wrap > .course-point");

        ulNode.classList.add("list");
        for(var i=0;i<arr.length;i++){
            ulNode.innerHTML+="<li><img src= "+(arr[i])+"></li>";
        }
        wrapC.appendChild(ulNode);

        //��̬����ʽ
        var styleNode = document.createElement("style");
        styleNode.innerHTML=".course-wrap > .list{width: "+arr.length+"00%}";
        styleNode.innerHTML+=".course-wrap > .list > li{width: "+(100/arr.length)+"%;}";
        document.head.appendChild(styleNode);

        //querySelectorAll�Ŀ�  ��̬�б�
        setTimeout(function () {
            liNodes = document.querySelectorAll(".course-wrap > .list > li");
            wrapC.style.height =liNodes[0].offsetHeight+"px";
        },200)


        /*
           *�����߼�
           *    ��һ��: ��ȡlistһ��ʼ��λ��
           *    �ڶ���: �õ���ָ�����ľ���
           *    ������: ����ָ�����ľ����Ԫ�ؼ���
        * */
        var eleStartX = 0; // Ԫ��һ��ʼ��λ��
        var startX = 0;    // ��ָһ��ʼ��λ��
        var index = 0;    //  ��ָ̧��ʱul��λ��
        var disX =0;      //  ��ָ����һ�εľ���
        wrapC.addEventListener("touchstart",function (ev) {
            ulNode.style.transition="";
            ev = ev || event;
            var touchC = ev.changedTouches[0];
            eleStartX = ulNode.offsetLeft;
            startX = touchC.clientX;
        })
        wrapC.addEventListener("touchmove",function (ev) {
            ev = ev || event;
            var touchC = ev.changedTouches[0];
            var nowX = touchC.clientX;
            disX = nowX - startX; // nowX��ֵһֱ�ڱ�ͬ��  ������ָ̧����

            ulNode.style.left =  eleStartX + disX+"px";
        })
        wrapC.addEventListener("touchend",function () {
            ulNode.style.transition=".5s left";
            index = Math.round(ulNode.offsetLeft / document.documentElement.clientWidth);

            if(index>0){
                index=0;
            }else if(index < 1-arr.length){
                index =  1-arr.length;
            }


            if(wrapP){
                var points = wrapP.querySelectorAll("span");
                for(var i=0;i<points.length;i++){
                    points[i].classList.remove("active");
                }
                points[-index].classList.add("active")
            }


            ulNode.style.left =  index*document.documentElement.clientWidth+"px";
        })

        //СԲ��

        if(wrapP){
            for(var i=0;i<arr.length;i++){
                if(i==0){
                    wrapP.innerHTML+="<span class='active'></span>";
                }else {
                    wrapP.innerHTML+="<span></span>";
                }
            }
        }
    }
    w.slide.course = course;
})(window)