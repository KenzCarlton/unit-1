//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){

	//define two arrays for cities and population
	var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}]

    //create the table element
    let table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

	//add the table to the object with id=myDiv
    document.querySelector("#myDiv").appendChild(table);

	//call each of the functions defined below; assign 'cityPop' to 'chart' parameter
	addColumns(cityPop);
	addEvents();
}

//call the initialize function once the DOM content has loaded
document.addEventListener('DOMContentLoaded',initialize)

//define the function to add the City Size column
function addColumns(chart){
	//set the initial value of the counter variable
	i = 0

	//select and modify each table row according to which level of the table it is 
    document.querySelectorAll("tr").forEach(function(row){
		
		//add the header title
    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else { //for all levels besides the header
    		var citySize;

			//assign population designation depending on the relevant population stored in the 
			//cityPop var (called by parameter 'chart') and add to end of row in table
    		if (chart[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (chart[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend',citySize);
    	};
		//increase counter variable by 1
		i++
    });
};

//define the function to add possible events
function addEvents(){
	//if the user hovers the mouse over the table:
	document.querySelector("table").addEventListener("mouseover", function(){

		//define new 'color' variable and assign it the string 'rgb(', three random
		//numbers separated by commas, and the string ')' [this is equivalent to an rgb color value]
		var color = "rgb(";

		for (i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ", ";
			
			} else {
				color += ")";
			}

		};

		//change the color of the table to be the random color determined above for the 'color' variable
		document.querySelector('table').style.color = color;
	});

	//define a function that will send the user an alert
	function clickme(){

		alert('Hey, you clicked me!');
	};

	//if the user clicks on the table, run the clickme() function
	document.querySelector("table").addEventListener("click", clickme);
};