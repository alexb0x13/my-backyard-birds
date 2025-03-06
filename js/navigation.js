document.addEventListener('DOMContentLoaded', function() {
    const birdPages = [
        'american-robin.html',
        'blue-jay.html',
        'brown-thrasher.html',
        'carolina-wren.html',
        'catbird.html',
        'chickadees.html',
        'downy-hairy-woodpeckers.html',
        'eastern-bluebird.html',
        'eastern-towhee.html',
        'house-wren.html',
        'mourning-dove.html',
        'native-sparrows.html',
        'northern-cardinal.html',
        'northern-mockingbird.html',
        'pileated-woodpecker.html',
        'problem-critters.html',
        'red-bellied-woodpecker.html',
        'red-breasted-nuthatch.html',
        'spring-birds.html',
        'tufted-titmouse.html',
        'white-breasted-nuthatch.html',
        'woodpeckers.html',
        'yellow-shafted-flicker.html'
    ];

    function updateNavigation() {
        const currentPage = window.location.pathname.split('/').pop();
        const currentIndex = birdPages.indexOf(currentPage);
        const navigationLinks = document.querySelector('.navigation-links');

        if (navigationLinks) {
            navigationLinks.innerHTML = `
                <a href="../chapters/preface.html" class="nav-link">← Preface</a>
                <a href="../index.html" class="nav-link">Back to Home</a>
                <a href="../birds/${birdPages[0]}" class="nav-link">First Bird →</a>
            `;
        }
    }

    updateNavigation();
});
