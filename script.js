
   image_container =document.getElementById("gallery");
   image = image_container.firstElementChild;
   image.className="visible";
   
   function next_image() {
    image.classList.remove("visible");
	image=image.nextElementSibling;	
		//текущая становится следующей
	if(image==null) {
	image = image_container.firstElementChild;
	//если следующей нет, то image - первая
	}  	 
	image.classList.add("visible"); 
						}
							
	function prev_image() {
    image.className="invisible"; 
	image=image.previousElementSibling;	
		//текущая становится следующей
	if(image==null) {
	image = image_container.lastElementChild;
	//если слева нет, то image - последняя
	}  	 
	image.className="visible"; 
							}
