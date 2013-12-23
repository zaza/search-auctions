function Allegro(query, location) {
	this.q = query;
	this.loc = location;
}

Allegro.prototype.getSearchUrl = function() {
	if (this.loc == null)
		return "http://allegro.pl/listing/listing.php?string="+this.q+"&search_scope";
	else
		return "http://allegro.pl/listing/listing.php?string="+this.q+"&search_scope=&city="+this.loc+"&postcode_enabled=2";
}