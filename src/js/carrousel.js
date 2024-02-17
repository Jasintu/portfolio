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
        var walk = (x - startX) * 3; 
        draggableDiv.scrollLeft = scrollLeft - walk;
    });