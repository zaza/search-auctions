function Gumtree(query, location) {
	this.q = query;
	if (location == "gdansk")
		this.loc = location+"/l3200072";
	else if (location == "katowice")
		this.loc = location+"/l3200285";
	else if (location == "krakow")
		this.loc = location+"/l3200208";
	else if (location == "lublin")
		this.loc = location+"/l3200145";
	else if (location == "lodz")
		this.loc = location+"/l3200183";
	else if (location == "poznan")
		this.loc = location+"/l3200366";
	else if (location == "szczecin")
		this.loc = location+"/l3200402";
	else if (location == "warszawa")
		this.loc = location+"/l3200008";
	else if (location == "wroclaw")
		this.loc = location+"/l3200114";
	else
		this.loc = location;
}

Gumtree.prototype.getSearchUrl = function() {
	if (this.loc == null)
		return "http://www.gumtree.pl/fp-"+this.q+"?isSearchForm=true"
	else
		return "http://www.gumtree.pl/fp-"+this.q+"/"+this.loc+"?isSearchForm=true";
}