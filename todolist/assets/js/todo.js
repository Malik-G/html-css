var plusOrMinus = 0;

init();

function init() {
	
	// MINUS/PLUS BUTTON EVENT LISTENER
	$("h1 i").on("click", function(){
		toggleList();
		if (plusOrMinus === 0) {
			$(this).removeClass("fas fa-minus-circle float-right");
			$(this).addClass("fas fa-plus-circle float-right");
			plusOrMinus = 1;
		}
		else {
			$(this).removeClass("fas fa-plus-circle float-right");
			$(this).addClass("fas fa-minus-circle float-right");
			plusOrMinus = 0;
		}
	});

	// COMPLETED LIST ITEM EVENT LISTENER
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed")
	});

	// DELETE BUTTON EVENT LISTENER
	$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		event.stopPropagation(); //ALLOWS THIS UL CLICK EVENT TO EXECUTE INDEPENDENT OF ANY OTHER UL CLICK EVENT
	});

	// INPUT EVENT LISTENER
	$("input[type='text']").keypress(function(event){
		if (event.which === 13){
			var newToDo = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newToDo + " </li> ");
		}
	});
}

function toggleList() {
	$("input[type='text']").fadeToggle();
	$("ul").fadeToggle();
}