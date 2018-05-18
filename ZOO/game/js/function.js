$(function() {
    var count = 0;
    var cong = document.createElement("img");
    cong.src = "image/zoo/zoo_cong.png";
    
    $("#cow").draggable();

    $("#cow01").droppable({
        accept: "#cow",
        drop: function(event, ui){
            $('#cow').find('p').html('COW');
            $(this).find('p').html(''); 
            $('#cow').find('img').attr('src','image/zoo/cowshadow.png');
            count++;
            if(count==6){
                $('.cong').prepend(cong);
            }
        }
    });
    
    $("#pig").draggable();

    $("#pig01").droppable({
        accept: "#pig",
        drop: function(event, ui){
            $('#pig').find('p').html('PIG');
            $(this).find('p').html(''); $('#pig').find('img').attr('src','image/zoo/pigshadow.png');
            count++;
            if(count==6){
                $('.cong').prepend(cong);
            }
        }
    });
    
    $("#bird").draggable();

    $("#bird01").droppable({
        accept: "#bird",
        drop: function(event, ui){
            $('#bird').find('p').html('BIRD');
            $(this).find('p').html('');
            $('#bird').find('img').attr('src','image/zoo/birdshadow.png');
            count++;
            if(count==6){
                $('.cong').prepend(cong);
            }
        }
    });
    
    $("#dog").draggable();

    $("#dog01").droppable({
        accept: "#dog",
        drop: function(event, ui){
            $('#dog').find('p').html('DOG');
            $(this).find('p').html('');
            $('#dog').find('img').attr('src','image/zoo/dogshadow.png');
            count++;
            if(count==6){
                $('.cong').prepend(cong);
            }
        }
    });
    
    $("#dolphine").draggable();

    $("#dolphine01").droppable({
        accept: "#dolphine",
        drop: function(event, ui){
            $('#dolphine').find('p').html('DOLPHINE');
            $(this).find('p').html('');
            $('#dolphine').find('img').attr('src','image/zoo/dolphineshadow.png');
            count++;
            if(count==6){
                $('.cong').prepend(cong);
            }
        }
    });

    
    $("#donkey").draggable();

    $("#donkey01").droppable({
        accept: "#donkey",
        drop: function(event, ui){
            $('#donkey').find('p').html('DONKEY');
            $(this).find('p').html('');
            $('#donkey').find('img').attr('src','image/zoo/donkeyshadow.png');
            count++;
            if(count==6){
                $('.cong').prepend(cong);
            }
        }
    });
    
    $( ".playagain" ).click(function() {
         location.reload();
    });
    

    


});






