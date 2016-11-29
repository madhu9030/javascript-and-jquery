	
$(document).ready(function(){
			$("p").hover(function(){

									$("img").mouseover(function(){
								$("img").attr("width","300");
							})
							// $("p ").css("background-color","yellow");

						 $("p").mouseout(function(){

						$("img").attr("width","100");
						
					})

				})

			})



