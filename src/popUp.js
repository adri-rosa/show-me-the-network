	var Alert = new CustomAlert();
	let sentinela = 0;
	

	function CustomAlert(){
			this.render = function(dialog){
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
			}
			this.ok = function(){
				document.getElementById('dialogbox').style.display = "none";
				document.getElementById('dialogoverlay').style.display = "none";
			}
		}
	
		function addEvent(obj, evt, fn) {
		if (obj.addEventListener) {
			obj.addEventListener(evt, fn, false);
		}
		else if (obj.attachEvent) {
			obj.attachEvent("on" + evt, fn);
			}
		}

		addEvent(window,"load",function(e) {
		addEvent(document, "mouseleave", function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if ((!from || from.nodeName == "HTML") && sentinela == 0) {
				// Aqui você coloca o seu popup
				Alert.render('É sério que você já vai?<br> Vai perder todo esse conteúdo GRATUITO mesmo?');
				sentinela = 1;
			}
		});
	}); 
	