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
	frame = 60;
	duration = 800;
	
	_elementId = elementId;
	scrolled = document.body.scrollTop;
	i = 0;
	
	if (scrolled < getTopOffset(_elementId)) {
		elementOffset = getTopOffset(_elementId) - scrolled;
		lastOffset = elementOffset % frame;
		offset = (elementOffset - lastOffset)/frame
		
		down = true;
    } else {
	    elementOffset = scrolled - getTopOffset(_elementId);
		lastOffset = elementOffset % frame;
		offset = (elementOffset - lastOffset)/frame
		
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
		
		if (i == frame
		    || scrolled == document.body.scrollTop) {
			document.body.scrollTop = getTopOffset(_elementId);
			clearInterval(hInterval);
		}
		
		scrolled = document.body.scrollTop;
	}, duration/frame);
}