const projectUrls = {
    project7: 'lr7/index.html',
    project8: 'lr8/index.html',
    project9: 'lr9/index.html',
    project10: 'lr10/index.html',
};

document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
        const projectId = card.id; 
        const url = projectUrls[projectId]; 
        window.open(url);
    });
});

