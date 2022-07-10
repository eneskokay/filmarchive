window.addEventListener("resize", ChectToContainerHeight);
function ChectToContainerHeight() {
if(container.clientHeight > window.innerHeight-20) { 
    container.style.position = 'static';
    }
else {
    container.style.position = 'absolute';
}
}