function Ebay(query, location) {
	this.q = query;
	if (location == "gdansk")
		this.loc = "80-001";
	else if (location == "katowice")
		this.loc = "40-001";
	else if (location == "krakow")
		this.loc = "30-001";
	else if (location == "lublin")
		this.loc = "20-001";
	else if (location == "lodz")
		this.loc = "90-001";
	else if (location == "poznan")
		this.loc = "60-001";
	else if (location == "szczecin")
		this.loc = "70-001";
	else if (location == "warszawa")
		this.loc = "00-001";
	else if (location == "wroclaw")
		this.loc = "50-001";
	else 
		this.loc = location;
}

Ebay.prototype.getSearchUrl = function() {
	if (this.loc == null)
		return "http://www.ebay.pl/sch/i.html?_sacat=0&_okw=&_oexkw=&_adv=1&_udlo=&_udhi=&_ftrt=901&_ftrv=1&_sabdlo=&_sabdhi=&_samilow=&_samihi=&_sadis=200&_fpos=&LH_SALE_CURRENCY=0&_sop=12&_dmd=1&_ipg=50&_nkw="+this.q+"&rt=nc&LH_PrefLoc=1&_arr=1"
	else
		return "http://www.ebay.pl/sch/i.html?_from=R40&_nkw="+this.q+"&_in_kw=1&_ex_kw=&_sacat=0&_okw=&_oexkw=&_adv=1&_udlo=&_udhi=&_ftrt=901&_ftrv=1&_sabdlo=&_sabdhi=&_samilow=&_samihi=&_fspt=1&_sadis=10&_fpos="+this.loc+"&LH_SALE_CURRENCY=0&_sop=12&_dmd=1&_ipg=50";
}