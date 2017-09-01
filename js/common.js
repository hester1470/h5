$(function(){
    var $row = $(".team .row")
    for(var i=0;i<$row.length;i++){
        var item = $($row[i]);
        var height = 0;
        for(var j=0;j<item.children().length;j++){

            var itemTeamGrid = $(item[i]).children();
            var team_grid1_agileits = itemTeamGrid.children();
            console.log(team_grid1_agileits.height())
            /*
            if(height = 0){
                height = $(item[i]).children().height();
            }else{
                if(height <= $(item[i]).children().height()){
                    height = $(item[i]).children().height();
                    $(item[0]).children().height(height);
                }else{
                    $(item[i]).children().height(height);
                }
            }
            */
        }
    }
    
});