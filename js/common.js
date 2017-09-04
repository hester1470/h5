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

    
    
});  

//------------------------函数---------------------------

//刷新list
var refreshList=function(type){
    nowType = type;
    var func = function(data){
        //成功之后执行的函数（刷新首页的list）
       // alert(data["data"])
    }
    ajaxData(addListUrl,type,func);
    nowOrder = "asc" ;
};

//添加新的list


//对现在的栏目进行排序
var sort = function(){
    
    var func = function(data){
        //成功之后执行的函数（刷新首页的list）
        //alert(data["data"])
    }
    if(nowOrder == "asc"){
        nowOrder = "desc";
    }else{
        nowOrder = "asc"
    }
    var data = {
        "nowType": nowType,
        "nowOrder" :nowOrder
    }
    ajaxData(sortUrl,data,func);
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
                //console.log(data);
            }
        },    
        error : function(XMLHttpRequest) {
            lert(XMLHttpRequest.status +' '+ XMLHttpRequest.statusText);    
        }
    });
};