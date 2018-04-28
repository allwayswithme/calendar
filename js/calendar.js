$(function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    $('#year').text(year);
    $('#month').text(month);
    initDaysByMonth(year,month);
});

function initDaysByMonth(year,month){
    var date = new Date(year,month,0);
    var dayNum = date.getDate();  //当月有多少天
    date.setDate(1);
    var today = date.getDay();//当月的1号是星期几

    var tailNum = 7-((dayNum + today)%7);

    //清空月份dom
    $('span.jzdb').remove();
    $('span.day').remove();

    var empDayList ='';
    var dayList = '';
    var tailDayList = '';

    for(var i = 0 ;i < today; i++){
        var item = '<span class="jzdb"></span>';
        empDayList += item;
    };
    for(var j = 1 ;j <= dayNum ; j ++){
       var item = '<span class="day">' + j + '</span>';
       dayList += item;
    };

    for(var k = 0 ;k < tailNum; k++){
        var item = '<span class="jzdb"></span>';
        tailDayList += item;
    };

    $('.jzdbox1.jzdbasf.jzdcal').append(empDayList).append(dayList).append(tailDayList);
}

/*年月选择begin*/
$('#lastYear').click(function () {
    var year = $('#year').text();
    var month = parseInt($('#month').text());
    $('#year').text(parseInt(year)-1);
    initDaysByMonth(parseInt(year)-1,month);
})
$('#nextYear').click(function () {
    var year = $('#year').text();
    var month = parseInt($('#month').text());
    $('#year').text(parseInt(year) + 1);
    initDaysByMonth(parseInt(year) + 1,month);
})

$('#lastMonth').click(function () {
    var year = $('#year').text();
    var month = parseInt($('#month').text());
    if(month == 1){
        var year = $('#year').text();
        $('#year').text(parseInt(year)-1)
        $('#month').text(12);
        initDaysByMonth(parseInt(year)-1 , 12);
    }else{
        $('#month').text(month - 1);
        initDaysByMonth(year, month - 1);
    }

})
$('#nextMonth').click(function () {
    var year = $('#year').text();
    var month = parseInt($('#month').text());
    if(month == 12){
        var year = $('#year').text();
        $('#year').text(parseInt(year) + 1);
        $('#month').text(1);
        initDaysByMonth(parseInt(year) + 1,1);
    }else {
        $('#month').text(month + 1);
        initDaysByMonth(year,month + 1);
    }

})
/*年月选择end*/


$(document).on('click','.day',function () {
    var $day = $(this);
    if($day.hasClass('circle')){
        $day.removeClass('circle');
        $day.removeAttr('data-title');
    }else{
        $day.addClass('circle');
        $day.attr('data-title','假日');
    }
})