function changeVideo(index) {
    const p = document.getElementById('video-container');
    console.log('video-container', p);
    switch (index) {
        case 1:
            p.innerHTML = '<iframe width="1000" height="500" src=" https://yangcici1010.github.io/cici209410181/myclass_xx" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 2:
            p.innerHTML = '<iframe width="1000" height="500" src=" https://yangcici1010.github.io/cici209410181/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 3:
            p.innerHTML = '<iframe width="1000" height="500" src="https://yangcici1010.github.io/cici209410181/自傳.pdf" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 4:
            p.innerHTML = '<iframe width="1000" height="500" src="https://yangcici1010.github.io/cici209410181/fku.html" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;

    }
}