function AukcjeFm(query, location) {
	this.q = query;
	this.loc = location;
}

AukcjeFm.prototype.getSearchUrl = function() {
	if (this.loc == null)
		return "http://www.aukcje.fm/adsearch.php?title="+this.q+"&country=Polska&state=&location_radio=5&city=&minprice=&maxprice=&category=&sort=ends&action=search&go=Znajd%C5%BA+%E2%80%BA"
	else
		return "http://www.aukcje.fm/adsearch.php?title="+this.q+"&country=Polska&state=&location_radio=5&city="+this.loc+"&minprice=&maxprice=&category=&sort=ends&action=search&go=Znajd%C5%BA+%E2%80%BA"
}