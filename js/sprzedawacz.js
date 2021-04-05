function Sprzedawacz(query, location) {
	this.q = query;
	this.loc = location;
}

Sprzedawacz.prototype.getSearchUrl = function() {
	if (this.loc == null)
		return "https://sprzedawacz.pl/szukaj/?q="+this.q;
	else
		return "https://sprzedawacz.pl/m_"+this.loc+"/?q="+this.q;
}