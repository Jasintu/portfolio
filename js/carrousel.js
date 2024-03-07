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

    
    var draggableDiv = document.getElementById('draggableDiv');
    var isDragging = false;
    var startX;
    var scrollLeft;
    
    draggableDiv.addEventListener('touchstart', function(e) {
        isDragging = true;
        startX = e.touches[0].pageX - draggableDiv.offsetLeft;
        scrollLeft = draggableDiv.scrollLeft;
    });
    
    draggableDiv.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        var x = e.touches[0].pageX - draggableDiv.offsetLeft;
        var walk = (x - startX) * 1;
        draggableDiv.scrollLeft = scrollLeft - walk;
    });
    
    draggableDiv.addEventListener('touchend', function() {
        isDragging = false;
    });
    

    let minhaDiv = document.getElementById('draggableDiv');

    minhaDiv.addEventListener('touchstart', function(event) {
        event.stopPropagation();
    });
    