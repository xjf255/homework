document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

function iva(){

	let a = document.f1.a.value;
	let b;
	const c = 12/100;
	b=parseFloat(a)*parseFloat(c);
	document.f1.b.value=b;
	alert("Su iva es de "+b);

};

