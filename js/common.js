var addListUrl = "json/list.json"
var sortUrl = "json/list.json"
var nowType = "tuijian"
var nowOrder = "asc" 
$(function(){
    $($(".nav ul li")[0]).css("color","#d33e42");
    $($(".nav2 li")[0]).css("color","#d33e42");
    $(".nav ul").on("click",function(e){
        $(e.target).css("color","#d33e42").siblings().css("color","#444");       
    });

    //滚动到页面底部加载
    $(window).scroll(function () {
            //已经滚动到上面的页面高度
        var scrollTop = $(this).scrollTop();
            //页面高度
        var scrollHeight = $(document).height();
            //浏览器窗口高度
        var windowHeight = $(this).height();
            //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
            if (scrollTop + windowHeight == scrollHeight) {

                //需要向后台传输当前的栏目（推荐，小时工等）
                //需要告诉后台当前最后一条的id
                //加载新的页面
                ajaxData(addListUrl,nowType,addList);
            }
    });
    
});  

//------------------------函数---------------------------

//刷新list
var refreshList=function(type){
    nowType = type;
    //清空当前的信息
    $(".items").html("");
    ajaxData(addListUrl,type,addList);
    nowOrder = "asc";
};

//添加新的list
var addList = function(datas){
    var data = datas.data;
    var length = data.length
    for(var i=0;i < length;i++){
        var item = data[i];
        //参数
        var recruit_id = item.recruit_id;
        var publisher = item.publisher;
        var work_nature = item.work_nature;
        var rest_type = item.rest_type;
        var salary = item.salary;
        var content = item.content;
        var age = item.age;
        var native_place = item.native_place;
        var create_time = item.create_time;

        $(".items").append('<div class="item" id="'+recruit_id+'"><div class="item-left"><img src="images/1.png" alt=""><p>'+salary+'</p></div><div class="item-right"><div class="item-r-top"><p>'+content+'</p></div><p class="author">'+publisher+' <span>'+create_time+'</span></p><span class="s-blue">'+work_nature+'</span><span class="s-blue">'+rest_type+'</span><span class="s-yellow">'+age+'</span><span class="s-yellow">'+native_place+'</span></div></div>');    
        
       // console.log(publisher)
    }

}


//对现在的栏目进行排序
var sort = function(){ 
    //判断当前是正序还是倒序
    if(nowOrder == "asc"){
        nowOrder = "desc";
    }else{
        nowOrder = "asc"
    }
    var data = {
        "nowType": nowType,
        "nowOrder" :nowOrder
    }
    //清空当前的信息
    $(".items").html("");
    ajaxData(sortUrl,data,addList);
}

//ajax进行交互
var ajaxData = function(url,datas,func){
    $.ajax({
        url: url,  
        type:'post',
        data:datas,
        dataType: "json",
        success:function(data) {
            if(data['status']=='error'){    //请求成功但没有执行成功
                alert(data['data']);
            }else{
                func(data);
            }
        },    
        error : function(XMLHttpRequest) {
            lert(XMLHttpRequest.status +' '+ XMLHttpRequest.statusText);    
        }
    });
};