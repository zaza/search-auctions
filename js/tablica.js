function Tablica(query, location) {
	this.q = query;
	this.loc = location;
}

Tablica.prototype.getSearchUrl = function() {
	if (this.loc == null)
		return "http://tablica.pl/oferty/?q="+this.q;
	else
		return "http://tablica.pl/"+this.loc+"/?search[dist]=10&q="+this.q;
}