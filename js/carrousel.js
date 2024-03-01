var draggableDiv = document.getElementById('draggableDiv');
    var draggableContent = document.getElementById('draggableContent');
    var isDown = false;
    var startX;
    var scrollLeft;

    draggableDiv.addEventListener('mousedown', function(e) {
        isDown = true;
        draggableDiv.style.cursor = 'grabbing';
        startX = e.pageX - draggableDiv.offsetLeft;
        scrollLeft = draggableDiv.scrollLeft;
    });
    draggableDiv.addEventListener('mouseleave', function() {
        isDown = false;
        draggableDiv.style.cursor = 'grab';
    });
    draggableDiv.addEventListener('mouseup', function() {
        isDown = false;
        draggableDiv.style.cursor = 'grab';
    });
    draggableDiv.addEventListener('mousemove', function(e) {
        if(!isDown) return;
        e.preventDefault();
        var x = e.pageX - draggableDiv.offsetLeft;
        var walk = (x - startX) * 1; 
        draggableDiv.scrollLeft = scrollLeft - walk;
    });

    
var draggableDiv2 = document.getElementById('projects');
    var draggableContent2 = document.getElementById('proj');
    var isDown = false;
    var startX;
    var scrollLeft;

    draggableDiv2.addEventListener('mousedown', function(e) {
        isDown = true;
        draggableDiv2.style.cursor = 'grabbing';
        startX = e.pageX - draggableDiv2.offsetLeft;
        scrollLeft = draggableDiv2.scrollLeft;
    });
    draggableDiv2.addEventListener('mouseleave', function() {
        isDown = false;
        draggableDiv2.style.cursor = 'grab';
    });
    draggableDiv2.addEventListener('mouseup', function() {
        isDown = false;
        draggableDiv2.style.cursor = 'grab';
    });
    draggableDiv2.addEventListener('mousemove', function(e) {
        if(!isDown) return;
        e.preventDefault();
        var x = e.pageX - draggableDiv2.offsetLeft;
        var walk = (x - startX) * 1; 
        draggableDiv2.scrollLeft = scrollLeft - walk;
    });

    