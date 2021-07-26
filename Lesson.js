    // NOTE: Not testet of correct working!
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
        }
      $(document).ready(function() {
        var rightNow = new Date();
        var day = rightNow.getUTCDay();
        var hour = addZero(rightNow.getHours());
        var minute =addZero(rightNow.getMinutes());
        var time = hour +":"+minute;
      
        // show div only on day and time, Monday to Friday; hide div on weekend
        // Sunday = 0, Monday = 1, and so on ..., Saturday = 6
      
        /* if (
          (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) &&
          hour > 9 && hour < 16
        ) { */
      
        if((day >= 0 && day <= 5) && (time < ("08:55") || time > ("10:40"))){
            $("#RDS").hide();
           }else{
          $("#RDS").show();
        }
      
        if(day >= 0 && day <= 3 && (time > ("10:55") && time < ("11:40"))){
            $("#RPK").show();
           }else{
          $("#RPK").hide();
        }
      
        if(day == 1 && time > ("11:40") && time < ("12:25")){
            $("#S").show();
           }else if(day == 2 && time > ("14:55") && time < ("15:40")){
            $("#S").show();
           }else if(day == 3 && time > ("14:55") && time < ("16:30")){
            $("#S").show();
           }else if(day == 4 && time > ("13:35") && time < ("14:10")){
            $("#S").show();
           }else{
          $("#S").hide();
        }
        
        if(day == 1 && time > ("12:25") && time < ("14:10")){
            $("#LS").show();
           }else if(day == 2 && time > ("13:25") && time < ("14:10")){
            $("#LS").show();
           }else if(day == 3 && time > ("14:10") && time < ("14:55")){
            $("#LS").show();
           }else if(day == 4 && time > ("14:10") && time < ("14:55")){
            $("#LS").show();
           }else{
          $("#LS").hide();
        }
      
        if(day == 1 && time > ("14:55") && time < ("15:40")){
            $("#Math").show();
           }else if(day == 2 && time > ("14:10") && time < ("14:55")){
            $("#Math").show();
          }else if(day == 3 || day == 4 || day == 5 && time > ("12:25") && time < ("13:10")){
            $("#Math").show();
           }else{
          $("#Math").hide();
        }
      
        if(day == 1 && time > ("14:10") && time < ("14:55")){
            $("#Afrikaans").show();
           }else if(day == 3 || day == 5 && time > ("13:35") && time < ("14:10")){
            $("#Afrikaans").show();
           }else if(day == 4 && time > ("14:55") && time < ("15:40")){
            $("#Afrikaans").show();
           }else{
          $("#Afrikaans").hide();
        }
      
        if(day == 1 && time > ("15:40") && time < ("16:30")){
            $("#English").show();
           }else if(day == 2 && time > ("12:25") && time < ("13:10")){
            $("#English").show();
           }else if(day == 4 && time > ("10:55") && time < ("12:25")){
            $("#English").show();
           }else{
          $("#English").hide();
        }
      
        if(day == 2 && time > ("11:40") && time < ("12:25")){
            $("#CAT").show();
           }else if(day == 5 && time > ("10:55") && time < ("12:25")){
            $("#CAT").show();
           }  else{
          $("#CAT").hide();
        }
      
        if(day == 3 && time > ("11:40") && time < ("12:25")){
            $("#BE").show();
           }else if(day == 5 && time > ("13:05") && time < ("13:35")){
            $("#BE").show();
           }else if(day == 5 && time > ("14:10") && time < ("15:00")){
            $("#BE").show();
           }else{
          $("#BE").hide();
        }
      
        if(day == 2){
          if(time > ("15:40")){
           if(time < ("16:30")){
            $("#LO").show();
           }else{
             $("#LO").hide();
           }
          }
        }else{
          $("#LO").hide();
        }
       
        if((day >= 0 && day <= 5) && (time > ("00:00") && time < ("08:55"))){
            $("#NO").show();
           }else if(day == 0 && time > ("10:45") && time < ("23:59")){
            $("#NO").show();
           }else if(day >= 1 && day <= 5 && time > ("10:40") && time < ("10:55")){
            $("#NO").show();
           }else if(day == 0 && time > ("11:40") && time < ("12:25")){
            $("#NO").show();
           }else if(day >= 2 && day <= 4 && time > ("13:10") && time < ("13:35")){
            $("#NO").show();
           }else if(day == 5 && time > ("15:00") && time < ("23:59")){
            $("#NO").show();
           }else if(day == 6 && time > ("0:00") && time < ("23:59")){
            $("#NO").show();
           }else if(day == 4 && time > ("15:40") && time < ("23:59")){
            $("#NO").show();
           }else if(day >= 1 && day <= 3 && time > ("16:30") && time < ("23:59")){
            $("#NO").show();
           }else{
          $("#NO").hide();
        }
      });