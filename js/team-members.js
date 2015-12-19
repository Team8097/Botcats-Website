function first()
{
	document.getElementById("team-members").style.WebkitTransition = "all 2s";
    document.getElementById("team-members").style.transition = "all 2s";
	document.getElementById("team-members").style.transition = "all 2s";
	document.getElementById("second").className = "btn btn-default";
	document.getElementById("third").className = "btn btn-default";
	
	$("#members").fadeOut();

	
	// $('#slot1').fadeOut(300, function(){
      // $(this).attr('src','mitha.png').bind('onreadystatechange load', function(){
         // if (this.complete) $(this).fadeIn(300);
      // });
   // });

	
	document.getElementById("name1").innerHTML = "Mitha Senthilkumar"
	document.getElementById("slot1").src = "mitha.png";
	document.getElementById("title1").innerHTML = "Team Captain";
	document.getElementById("slot1").className = "team-members";
	
	document.getElementById("name2").innerHTML = "Teagan Adsit"
	document.getElementById("slot2").src = "teagan.png";
	document.getElementById("title2").innerHTML = "Head of Hardware";
	document.getElementById("slot2").className = "team-members";
	
	document.getElementById("name3").innerHTML = "Diego Masini"
	document.getElementById("slot3").src = "diego.png";
	document.getElementById("title3").innerHTML = "Head of Outreach";
	document.getElementById("slot3").className = "team-members";
	
	document.getElementById("name4").innerHTML = "Cameron DeMille"
	document.getElementById("slot4").src = "cameron.png";
	document.getElementById("title4").innerHTML = "Head of Software";
	document.getElementById("slot4").className = "team-members";
	
	document.getElementById("name5").innerHTML = "William Michael"
	document.getElementById("slot5").src = "wil.png";
	document.getElementById("title5").innerHTML = "Hardware";
	document.getElementById("slot5").className = "team-members";
	
	document.getElementById("name6").innerHTML = "Byrant Phan"
	document.getElementById("slot6").src = "logo1.png";
	document.getElementById("title6").innerHTML = "Hardware";
	document.getElementById("slot6").className = "team-members-blank";
	
	document.getElementById("name7").innerHTML = "Michael Leonffu"
	document.getElementById("slot7").src = "michael.png";
	document.getElementById("title7").innerHTML = "Hardware";
	document.getElementById("slot7").className = "team-members";
	
	document.getElementById("name8").innerHTML = "James Melkonian"
	document.getElementById("slot8").src = "james.png";
	document.getElementById("title8").innerHTML = "Hardware";
	document.getElementById("slot8").className = "team-members";
	
	document.getElementById("name9").innerHTML = "Bhrugu Mallajosyula"
	document.getElementById("slot9").src = "logo1.png";
	document.getElementById("title9").innerHTML = "Hardware";
	document.getElementById("slot9").className = "team-members-blank";
	
	document.getElementById("name10").innerHTML = "Mudith Mallajosyula"
	document.getElementById("slot10").src = "logo1.png";
	document.getElementById("title10").innerHTML = "Hardware";
	document.getElementById("slot10").className = "team-members-blank";
	
	document.getElementById("name11").innerHTML = "Ryan Karagozian"
	document.getElementById("slot11").src = "ryan.png";
	document.getElementById("title11").innerHTML = "Hardware";
	document.getElementById("slot11").className = "team-members";
	
	$("#slot1").fadeIn();

	
}

function second()
{
	$("#slot1").fadeOut();

	
		$('#slot1').fadeOut(300, function(){
      $(this).attr('src','cameron.png').bind('onreadystatechange load', function(){
         if (this.complete) $(this).fadeIn(300);
      });
   });
	document.getElementById("team-members").style.WebkitTransition = "all 2s";
    document.getElementById("team-members").style.transition = "all 2s";    
	document.getElementById("first").className = "btn btn-default";
	document.getElementById("third").className = "btn btn-default";
	
	document.getElementById("name1").innerHTML = "Cameron DeMille"
	document.getElementById("slot1").src = "cameron.png";
	document.getElementById("title1").innerHTML = "Team Captain";
	document.getElementById("slot1").className = "team-members";
	
	document.getElementById("name2").innerHTML = "Teagan Adsit"
	document.getElementById("slot2").src = "teagan.png";
	document.getElementById("title2").innerHTML = "Head of Hardware";
	document.getElementById("slot2").className = "team-members";
	
	document.getElementById("name3").innerHTML = "Diego Masini"
	document.getElementById("slot3").src = "diego.png";
	document.getElementById("title3").innerHTML = "Head of Outreach";
	document.getElementById("slot3").className = "team-members";
	
	document.getElementById("name4").innerHTML = "William Michael"
	document.getElementById("slot4").src = "wil.png";
	document.getElementById("title4").innerHTML = "Hardware";
	document.getElementById("slot4").className = "team-members";
	
	document.getElementById("name5").innerHTML = "Maxwell Yang"
	document.getElementById("slot5").src = "logo1.png";
	document.getElementById("title5").innerHTML = "Hardware";
	document.getElementById("slot5").className = "team-members-blank";
	
	document.getElementById("name6").innerHTML = "Caden Nicholson"
	document.getElementById("slot6").src = "logo1.png";
	document.getElementById("title6").innerHTML = "Hardware";
	document.getElementById("slot6").className = "team-members-blank";
	
	document.getElementById("name7").innerHTML = "Emily Ha"
	document.getElementById("slot7").src = "logo1.png";
	document.getElementById("title7").innerHTML = "Outreach";
	document.getElementById("slot7").className = "team-members-blank";
	
	document.getElementById("name8").innerHTML = "Michael Leonffu"
	document.getElementById("slot8").src = "michael.png";
	document.getElementById("title8").innerHTML = "Hardware";
	document.getElementById("slot8").className = "team-members";
	
	document.getElementById("name9").innerHTML = ""
	document.getElementById("slot9").src = "blank.png";
	document.getElementById("title9").innerHTML = "";
	document.getElementById("slot9").className = "team-members";
	
	document.getElementById("name10").innerHTML = ""
	document.getElementById("slot10").src = "blank.png";
	document.getElementById("title10").innerHTML = "";
	document.getElementById("slot10").className = "team-members";
	
	document.getElementById("name11").innerHTML = ""
	document.getElementById("slot11").src = "blank.png";
	document.getElementById("title11").innerHTML = "";
	document.getElementById("slot11").className = "team-members";
	
	$("#slot1").fadeIn();

}

function third(){
	document.getElementById("team-members").style.WebkitTransition = "all 2s";
    document.getElementById("team-members").style.transition = "all 2s";    
	document.getElementById("second").className = "btn btn-default";
	document.getElementById("first").className = "btn btn-default";		
}