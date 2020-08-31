$( document ).ready(function() {
    load_avglist();
});
 
 
function load_avglist(){
    var avgList;
    var html;
    $("#load_avgList").click(function(){  
    
        var url="/winedata/avgList";  
        //var params="param1="+param1+"¶m2="+param1;  
  
        $.ajax({      
            type:"POST",  
            url:url,      
            //data:params,      
            success:function(args){
                avgList = args;
                for(var i=0;i<args.length;i++){
                    html = "<tr>"
                            + "<td>" + args[i].fixed_acidity + "</td>" 
                            + "<td>" + args[i].volatile_acidity + "</td>"
                            + "<td>" + args[i].citric_acid + "</td>"
							+ "<td>" + args[i].residual_sugar + "</td>"
							+ "<td>" + args[i].chlorides + "</td>"	
							+ "<td>" + args[i].free_sulfur_dioxide + "</td>"		
							+ "<td>" + args[i].total_sulfur_dioxide + "</td>"
							+ "<td>" + args[i].density + "</td>"	
							+ "<td>" + args[i].pH + "</td>"	
							+ "<td>" + args[i].sulphates + "</td>"		
							+ "<td>" + args[i].alcohol + "</td>"
							+ "<td>" + args[i].quality + "</td>"
                            "</tr>";
                    $("#avgList").append(html);
                }
                
                console.log(args);
            },   
            beforeSend:function(){
                $("#avgList").empty();  
            },
            error:function(e){  
                alert(e.responseText);  
            }  
        });  
      
    });
}