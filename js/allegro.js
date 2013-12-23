function Allegro(query, location) {
	this.q = query;
	this.loc = location;
}

Allegro.prototype.getSearchUrl = function() {
	var url = "http://allegro.pl/listing/listing.php?string="+this.q+"&search_scope";
	if (this.loc != null)
		url = url + "=&city="+this.loc+"&postcode_enabled=2";
	return url;
}