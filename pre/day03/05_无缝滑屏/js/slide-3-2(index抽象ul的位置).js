(function (w) {
    // w.slide = Object.create(null);
    w.slide = {};
    function course(arr) {
        //�޷컬���߼�

        //����html�ṹ
        var wrapC = document.querySelector("#wrap .course-wrap");
        var ulNode = document.createElement("ul");
        var liNodes = document.querySelectorAll("#wrap .course-wrap > .list > li")

        ulNode.classList.add("list");
        for(var i=0;i<arr.length;i++){
            ulNode.innerHTML+="<li><img src= "+(arr[i])+"></li>";
        }
        wrapC.appendChild(ulNode);

        //��̬����ʽ
        var styleNode = document.createElement("style");
        styleNode.innerHTML="#wrap .course-wrap > .list{width: "+arr.length+"00%}";
        styleNode.innerHTML+=" #wrap .course-wrap > .list > li{width: "+(100/arr.length)+"%;}";
        document.head.appendChild(styleNode);

            //querySelectorAll�Ŀ�  ��̬�б�
        liNodes = document.querySelectorAll("#wrap .course-wrap > .list > li");
        setTimeout(function () {
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
            index = ulNode.offsetLeft / document.documentElement.clientWidth;
           /* if(disX > 0 ){
                // ���һ�
                index = Math.ceil(index);
            }else if(disX < 0){
                //����
                index = Math.floor(index);
            }*/
            index = Math.round(index) // ����֮һ��ת
            ulNode.style.left =  index*document.documentElement.clientWidth+"px";
        })
    }
    w.slide.course = course;
})(window)