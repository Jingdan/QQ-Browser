/**
 * Created by Administrator on 2017/2/13.
 */
$(function(){
    /*全局变量*/
    var index = 0,timer = null;
     changHid(index);
    //gps
    $('.gps li').on('click',function(){
        // 1.1 获取当前的索引
        index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();
        setTimeout(function(){
            $("section ").eq(index).removeClass('current').siblings("section").addClass('current');
        },10);
        changHid(index);
    });

    //滚动页面
    $(window).mousewheel(function(event,d){
            //1. 求出滚动的屏的索引
           clearTimeout(timer);
           timer = setTimeout(function(){
               index -= d;
               if(index > $('.gps li').length -1){
                   index = 0;
               }else if(index < 0){
                   index = $('.gps li').length -1;
               }
           // 2. 切换GPS和页面
           $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');
           $('section').eq(index).show().siblings('section').hide();
               changHid(index);
               //3.空降
               setTimeout(function(){
                   $("section ").eq(index).removeClass('current').siblings("section").addClass('current');
               },10);
        },400);


    });
    /*更改动效*/
    function changHid(num){
        if(num == 0){
            $('#logo').hide();
            $('#scroll').show();
        }else{
            $('#scroll').hide();
            $('#logo').show()
        }

    }
})
