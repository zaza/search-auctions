function Sprzedajemy(query, location) {
	this.q = query;
	if (location == "gdansk")
		this.loc = "58819";
	else if (location == "katowice")
		this.loc = "59612";
	else if (location == "krakow")
		this.loc = "36906";
	else if (location == "lublin")
		this.loc = "36984";
	else if (location == "lodz")
		this.loc = "25903";
	else if (location == "poznan")
		this.loc = "33631";
	else if (location == "szczecin")
		this.loc = "20266";
	else if (location == "warszawa")
		this.loc = "28024";
	else if (location == "wroclaw")
		this.loc = "52841";
	else 
		this.loc = "1";
}

Sprzedajemy.prototype.getSearchUrl = function() {
	return "http://sprzedajemy.pl/szukaj?inp_category_id=5&inp_location_id="+this.loc+"&inp_text[v]="+this.q+"&offset=0";
}