$(document).ready(function(){
			$(".link").click(function(){
				var info = $(this).attr("href")+ " #content";

			$("#content").hide("fast", loadContent);
			$("#loader").fadeIn("normal");

			function loadContent(){
				$("#content").load(info, "", function(){
					$("#content").show("normal", hideLoader());
				})
			}

			function hideLoader(){
				$("#loader").fadeOut("normal");
			}

			return false;	
			})
		})