//requires weight and height to be passed.
function calculateBmi() 
{
	//let weight = document.getElementById"weight".value;
	//let ElementById('')
	let weight = $("#weight").val();
	//var height = document.getElementById"height".value;
	let height = $("#height").val();
	
	console.log("weight"+weight+"height"+height);
	
	if(weight > 0 && height > 0){
		
		let finalBmi = weight/(height/100*height/100);
		$("#bmi").val(finalBmi);
		
		switch(true) 
	{
		
		case (finalBmi <18.5):
			$('#feedback').html("<strong>This means:</strong>That you are too thin.");
			break;
		
		case (finalBmi >25):
			$('#feedback').html("<strong>This means:</strong>That you are overweight.");
			break;
		
		default:
			$('#feedback').html("<strong>This means:</strong>That you are healthy.");
	}
		
		
	}

	else{	$('#feedback').html("Please fill in everything correctly");
	
	//alert("Please Fill in everything correctly");
	}
}