function highlight() {
    //Write your code here
 let strng = document.getElementsByTagName("strong");
	for(let i = 0;i< strng.length;i++) {
		strng[i].style.color = "green";
	}

}


function return_normal() {
    //Write your code here
let strng = document.getElementsByTagName("strong");
	for(let i = 0;i< strng.length;i++) {
		strng[i].style.color = "black";
	}

    
}
