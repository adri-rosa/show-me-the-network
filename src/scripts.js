    var target_date = new Date("07/09/2020 19:30").getTime();
    var dias, horas, minutos, segundos;
    var regressiva = document.getElementById("regressiva");
    
    setInterval(function () {
    
        var current_date = new Date().getTime();
        var segundos_f = (target_date - current_date) / 1000;
    
    dias = parseInt(segundos_f / 86400);
        segundos_f = segundos_f % 86400;
        
        horas = parseInt(segundos_f / 3600);
        segundos_f = segundos_f % 3600;
        
        minutos = parseInt(segundos_f / 60);
        segundos = parseInt(segundos_f % 60);
    
   document.getElementById('dia').innerHTML =  dias > 0 ? dias : 0  ;
   document.getElementById('hora').innerHTML = horas > 0 ? horas : 0  ;
   document.getElementById('minuto').innerHTML = minutos > 0 ? minutos : 0  ;
   document.getElementById('segundo').innerHTML = segundos > 0 ? segundos : 0  ;
      
    
    }, 1000);

let sentinela = 0;

    function CustomAlert(){
        this.render = function(dialog){
            if(sentinela=0){

            
            var winW = window.innerWidth;
            var winH = window.innerHeight;
            var dialogoverlay = document.getElementById('dialogoverlay');
            var dialogbox = document.getElementById('dialogbox');
            dialogoverlay.style.display = "block";
            dialogoverlay.style.height = winH+"px";
            dialogbox.style.left = (winW/2) - (550 * .5)+"px";
            dialogbox.style.top = "100px";
            dialogbox.style.display = "block";
            document.getElementById('dialogboxhead').innerHTML = "<img src='images/gatodeBotas.gif' width='400' height='300'>";		
            document.getElementById('dialogboxbody').innerHTML = dialog;
            document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
            sentinela = 1;
            }
        }

        this.ok = function(){
            document.getElementById('dialogbox').style.display = "none";
            document.getElementById('dialogoverlay').style.display = "none";
        }
    }
    
var Alert = new CustomAlert();
 
