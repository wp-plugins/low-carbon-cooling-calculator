var CalcCode = document.getElementById("carboncalc").innerHTML;

if (CalcCode.indexOf("href=\"http://www.watkinshire.co.uk/air-conditioning-hire/low-carbon-cooling.php") == -1) {
	document.getElementById("carboncalc").innerHTML = "";
}
else {
	if (CalcCode.indexOf("nofollow") > -1) {
		document.getElementById("carboncalc").innerHTML = "";
	}
}

function CarbonIsNumeric(IntText) {
	var ValidChars = "0123456789.-";
	var IsNumber = true;
	var Char;
	
	for (LoopChar = 0; LoopChar < IntText.length && IsNumber == true; LoopChar++) { 
		Char = IntText.charAt(LoopChar); 
		
		if (ValidChars.indexOf(Char) == -1) {
			IsNumber = false;
		}
	}
	
	if (IntText.length == 0) {
		IsNumber = false;
	}
	
	return IsNumber;
}

function CarbonRoundInt(Int, DecPoints) {
	if (!DecPoints) return Math.round(Int);
	
	if (Int == 0) {
		var Decimals = "";
		for(var LoopDec = 0; LoopDec < DecPoints; LoopDec++) Decimals += "0";
		return "0."+Decimals;
	}

	var Exponent = Math.pow(10,DecPoints);
	var NewInt = Math.round((Int * Exponent)).toString();
	NewInt = NewInt.slice(0,-1 * DecPoints) + "." + NewInt.slice(-1 * DecPoints);
	
	if (NewInt.charAt(0) == ".") {
		NewInt = "0" + NewInt;
	}
	
	return NewInt;
}

function CarbonCalculateVolume(Length, Width, Volume) {
	LengthCheck = CarbonIsNumeric(document.getElementById(Length).value);
	WidthCheck = CarbonIsNumeric(document.getElementById(Width).value);
	
	if (LengthCheck == true && WidthCheck == true) {
		document.getElementById(Volume).value = ((document.getElementById(Length).value * document.getElementById(Width).value) * 3);
	}
	else {
		document.getElementById(Volume).value = "";
	}
	
	CarbonCalculateArea('CarbonVolume','CarbonApplication');
}

function CarbonSelectSector(Sector) {
	SectorCheck = CarbonIsNumeric(document.getElementById(Sector).value);
	
	if (SectorCheck == true) {
		var ApplicationCode = "";
		
		ApplicationCode = "<label for=\"CarbonApplication\">Application:</label><select id=\"CarbonApplication\" name=\"CarbonApplication\" onchange=\"CarbonCalculateArea('CarbonVolume','CarbonApplication');\"><option value=\"\">--Select One--</option>";
		
		switch(document.getElementById(Sector).value) {
			case "1":
				ApplicationCode = ApplicationCode + "<option value=\"10\">Office</option><option value=\"6\">Stock Room</option><option value=\"30\">Laundries</option>";
				break;
			
			case "2":
				ApplicationCode = ApplicationCode + "<option value=\"7\">Classroom</option><option value=\"9\">Classroom IT</option><option value=\"8\">Exam Hall</option><option value=\"8\">Assembly Hall</option><option value=\"12\">Canteen</option><option value=\"30\">Kitchen</option><option value=\"8\">Lecture Hall</option>";
				break;
			
			case "3":
				ApplicationCode = ApplicationCode + "<option value=\"12\">Light Manufacturing</option><option value=\"20\">Plastics</option><option value=\"30\">Bakery</option><option value=\"20\">Mezzanine Floor - Warehouse</option><option value=\"6\">Warehouse</option>";
				break;
			
			case "4":
				ApplicationCode = ApplicationCode + "<option value=\"15\">Bar</option><option value=\"12\">Cafe</option><option value=\"12\">Gym</option><option value=\"12\">Nightclub</option><option value=\"15\">Marquee</option><option value=\"15\">Cinema</option><option value=\"15\">Theatre</option><option value=\"15\">Swimming Pool</option><option value=\"12\">Restaurants</option>";
				break;
			
			case "5":
				ApplicationCode = ApplicationCode + "<option value=\"20\">High Street Shop</option><option value=\"12\">Out of Town Retail Store</option><option value=\"12\">Supermarket</option><option value=\"20\">Mezzanine Floor - Shop</option><option value=\"12\">Car Showroom</option><option value=\"8\">Bank</option>";
				break;
		}
		
		ApplicationCode = ApplicationCode + "</select>";
		
		document.getElementById("Carbonapplicationbox").style.display = "block";
		document.getElementById("Carbonapplicationbox").innerHTML = ApplicationCode;
	}
	else {
		document.getElementById("Carbonapplicationbox").style.display = "none";
		document.getElementById("Carbonapplicationbox").innerHTML = "";
	}
}

function CarbonCalculateArea(Volume, Application) {
	VolumeCheck = CarbonIsNumeric(document.getElementById(Volume).value);
	ApplicationCheck = CarbonIsNumeric(document.getElementById(Application).value);
	
	if (VolumeCheck == true && ApplicationCheck == true) {
		var Rate = (document.getElementById(Volume).value * document.getElementById(Application).value);
		
		document.getElementById("Carbonresults").innerHTML = "<p>We recommend:<br />" + Math.ceil(Rate / 7000) + " x Low Carbon Cooling Unit(s)</p>";
	}
}