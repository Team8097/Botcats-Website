function first()
{
	document.getElementById("team-members").style.WebkitTransition = "all 2s";
    document.getElementById("team-members").style.transition = "all 2s";
	document.getElementById("team-members").style.transition = "all 2s";
	document.getElementById("test").src = "logo.png";
	document.getElementById("second").className = "btn btn-default";
	document.getElementById("third").className = "btn btn-default";

    
}

function second()
{
	document.getElementById("team-members").style.WebkitTransition = "all 2s";
    document.getElementById("team-members").style.transition = "all 2s";    
		document.getElementById("test").src = "logo1.png"; 
			document.getElementById("first").className = "btn btn-default";
	document.getElementById("third").className = "btn btn-default";
}

function third(){
	document.getElementById("team-members").style.WebkitTransition = "all 2s";
    document.getElementById("team-members").style.transition = "all 2s";    
		document.getElementById("test").src = "logo1.png"; 
	document.getElementById("second").className = "btn btn-default";
	document.getElementById("first").className = "btn btn-default";		
}