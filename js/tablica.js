function Tablica(query, location) {
	this.q = query;
	this.loc = location;
}

Tablica.prototype.getSearchUrl = function() {
	if (this.loc == null)
		return "https://olx.pl/oferty/q-"+this.q;
	else
		return "https://olx.pl/"+this.loc+"/?search[dist]=10&q="+this.q;
}