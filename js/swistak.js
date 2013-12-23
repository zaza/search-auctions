function Swistak(query, location) {
	this.q = query;
	this.loc = location;
}

Swistak.prototype.getSearchUrl = function() {
	if (this.loc == null)
		return "http://www.swistak.pl/szukaj/"+this.q;
	else
		return "http://www.swistak.pl/szukaj/"+this.q+"?f[type]=1&f[typ_konta]=2&f[miejscowosc]="+this.loc;
}