window.addEventListener('scroll', function() {
    const scroll = window.pageYOffset;
    
    const layer1 = document.querySelector('.layer-1');
    if (layer1) {
        layer1.style.transform = 'translateY(' + (scroll * 0.1) + 'px)';
    }
    
    const layer2 = document.querySelector('.layer-2-hands');
    if (layer2) {
        layer2.style.transform = 'translateY(' + (scroll * 0.3) + 'px)';
    }
    
    const layer3 = document.querySelector('.layer-3-content');
    if (layer3) {
        layer3.style.transform = 'translateY(' + (scroll * 0.2) + 'px)';  // ← БЫЛО 0.5, СТАЛО 0.2
    }
});