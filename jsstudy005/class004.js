var years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
for (var i = 0; i < years.length; i++) {
    var birthYear = 1956;
    var age = years[i] - birthYear;
    console.log("In the year ".concat(String(years[i]), " I was ").concat(String(age), " years old."));
}
for (var i = years.length; i >= 0; i--) {
    var birthYear = 1956;
    var age = years[i] - birthYear;
    console.log("In the year ".concat(String(years[i]), " I was ").concat(String(age), " years old."));
}
