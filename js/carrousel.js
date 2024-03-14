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

    let projects = document.getElementById('projects');
let dragging = false;
let start;
let leftScroll;

projects.addEventListener('touchstart', function(e) {
    dragging = true;
    start = e.touches[0].pageX - projects.offsetLeft;
    leftScroll = projects.scrollLeft;
});

projects.addEventListener('touchmove', function(e) {
    if (!dragging) return;
    e.preventDefault();
    let x = e.touches[0].pageX - projects.offsetLeft;
    let move = (x - start) * 1;
    projects.scrollLeft = leftScroll - move;
});

projects.addEventListener('touchend', function() {
    dragging = false;
});


    let minhaDiv = document.getElementById('draggableDiv');

    minhaDiv.addEventListener('touchstart', function(event) {
        event.stopPropagation();
    });

    let minhaDiv2 = document.getElementById('projects');

    minhaDiv2.addEventListener('touchstart', function(event) {
        event.stopPropagation();
    });
    