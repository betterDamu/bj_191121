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
    }
    w.slide.course = course;
})(window)