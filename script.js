function firstChar(text) {
  // your code here
	let final=text.trim()
	if(final.length>=1){
		return final[0]
	}
	else{
		return ""
	}
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
