function load() {
	// stub
}

function getTopOffset(elementId) {
    var element = document.getElementById(elementId);
    var offset = element.offsetTop;
    return offset;
}


// TODO virer cet merde !
var hInterval;
var elementOffset;
var offset;
var i;
var _elementId;
var scrolled;
var down;

function scrollTo(elementId) {
	_elementId = elementId;
	scrolled = document.body.scrollTop;
	i = 0;
	
	if (scrolled < getTopOffset(_elementId)) {
		elementOffset = getTopOffset(_elementId) - scrolled;
		lastOffset = elementOffset % 30;
		offset = (elementOffset - lastOffset)/30
		
		down = true;
    } else {
	    elementOffset = scrolled - getTopOffset(_elementId);
		lastOffset = elementOffset % 30;
		offset = (elementOffset - lastOffset)/30
		
		down = false;
	}

	hInterval = setInterval(function() {
		if (down) {
		    document.body.scrollTop += offset;
		} else {
			document.body.scrollTop -= offset;
		}
		i++;
	
		/*console.log(i + ' ' + offset + ' ' + getTopOffset(_elementId) + ' '
		           + document.body.scrollTop);*/
		
		if (i == 30
		    || scrolled == document.body.scrollTop) {
			document.body.scrollTop = getTopOffset(_elementId);
			clearInterval(hInterval);
		}
		
		scrolled = document.body.scrollTop;
	}, 33);
}