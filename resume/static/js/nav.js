{% load static %}

<script>
    let options = {
        startAngle: -1.55,
        size: 150,
        fill: {color: "blue"}
    }
    $(".circle .barr").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%")
    });
    $(".1 .barr").circleProgress({
        value: 0.92,
    });
    $(".2 .barr").circleProgress({
        value: 0.97,
    });
    $(".3 .barr").circleProgress({
        value: 0.86,
    });
    $(".4 .barr").circleProgress({
        value: 0.93,
    });


</script>

<script type="text/javascript">
    var btnContainer = document.getElementById("navbar");
    var btns = btnContainer.getElementsByClassName("nav-link");

    for(var i =0; i<btns.length; i++){
        btns[i].addEventListener('click', function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active");
            this.className += " active";
        })
    }
</script>
