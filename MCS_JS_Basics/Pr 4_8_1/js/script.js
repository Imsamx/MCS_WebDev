function haveEnough() {
    var totalCash = Number(prompt('сколько у нас кэша?'));
    var watchesCount = Number(prompt('сколько часов берем?'));
    var earringsCount = Number(prompt('сколько сережек берем?'));
    var watchesSum = Number(watchesCount*prompt('сколько стоят часы?'));
    var earringsSum = Number(earringsCount*prompt('сколько стоят сережки?'));
    if(totalCash>=(watchesSum+earringsSum)) {
    	window.alert('Enough $$$');
    }else {
	    window.alert('Not Enough $$$');
	}
}
    
haveEnough();
haveEnough(); 
haveEnough();
haveEnough(); 
haveEnough(); 
haveEnough();
haveEnough();
haveEnough();
haveEnough();   
haveEnough();



