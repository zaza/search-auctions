function Sprzedajemy(query, location) {
	this.q = query;
	this.loc = location;
}

Sprzedajemy.prototype.getSearchUrl = function() {
	// TODO: support location
	//http://sprzedajemy.pl/malopolskie/krakow?inp_text[v]=ipod+classic
	return "http://sprzedajemy.pl/szukaj?srchm=hp&inp_text="+this.q+"&inp_location_id=1&inp_category_id="
}