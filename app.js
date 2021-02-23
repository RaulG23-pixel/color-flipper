//Simple button
const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.querySelector("#simple");
const color = document.querySelector(".color");

if(window.location.href.indexOf("index.html") != -1 ){
	btn.addEventListener("click", function(){
 	let color1,color2,color3;
 	color1 = Math.floor(Math.random() * 256);
 	color2 = Math.floor(Math.random() * 256);
 	color3 = Math.floor(Math.random() * 256);
 	let newRgb = `rgb(${color1},${color2},${color3})`;
 	document.body.style.background = newRgb;
 	color.textContent = newRgb;
});
}

if(window.location.href.indexOf("hex.html") != -1){
//Hex button
	const hexSample = "abcdef0123456789";
	const hex = document.querySelector("#hex");
	hex.addEventListener("click", function(){
		let newHex = "#";
		for(let i = 0; i < 6; i++){
			let randomN = Math.floor(Math.random() * 7);
			newHex += hexSample[randomN];
		}
		document.body.style.background = newHex;
		color.textContent = newHex;
	})
}


	
