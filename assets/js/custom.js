// Navbar decoration
const collapseItem = document.querySelector('.collapse');
const tabName = document.querySelector('#tabName');
const mainNavbar = document.querySelector('#mainNavbar');
collapseItem.addEventListener('show.bs.collapse', () => {
    tabName.style.display = 'none';
    mainNavbar.style.border = '1px solid #383838';
})
collapseItem.addEventListener('hidden.bs.collapse', () => {
    tabName.style.display = 'flex';
    mainNavbar.style.border = 'none';
})
window.addEventListener('resize', () => {
    if (window.innerWidth > 576) {
        tabName.style.display = 'none';
    } else {
        tabName.style.display = 'flex';
    }
})

// opposition

const oppoTitle = document.querySelector('#oppoTitleMain');
const oppoTitleScaler = () => {
    const oppoTitleW = oppoTitle.offsetWidth
    oppoTitle.style.height = Math.round(oppoTitleW / 210.2 * 118.25).toString();
}
if (oppoTitle !== null) {
    oppoTitleScaler();
}

// archive
const cardFinalScaler = () => {
    const cards = document.querySelectorAll('.card-custom');
    for (card of cards) {
        childImg = card.firstChild;
        card.style.maxWidth = childImg.getBoundingClientRect().width + 'px';
        card.style.maxHeight = childImg.getBoundingClientRect().height + 'px';
    }
}
const executeFinalScaler = () => {
    try {
        cardFinalScaler();
    } catch (error) {
        throw error
    }
}
executeFinalScaler();
window.addEventListener('resize', executeFinalScaler)

// home
const spotSvgActions = () => {
    const svgActions = new Array();
    for (let num of Array(34).keys()) {
        const svgPath = document.querySelector(`#svg${num+1}`);
        const eyePic = document.querySelector(`#eye${num+1}`);
        if (svgPath !== null && eyePic !== null) {
            svgActions.push({svgPath, eyePic});
        } else {
            return null
        }
    }
    return svgActions;
}

const svgActions = spotSvgActions();
let visibleEye = document.querySelector('#eye0');
let hoveredItem = null;
let timeoutID = null;

if (svgActions !== null) {
    for (let svgAction of svgActions) {
        svgAction.svgPath.addEventListener('mouseenter', () => {
            if (hoveredItem !== svgAction.svgPath) {
                if (typeof timeoutID === 'number') {
                    clearTimeout(timeoutID);
                }
                hoveredItem = svgAction.svgPath;
                timeoutID = setTimeout(() => {
                    visibleEye.style.opacity = '0';
                    visibleEye = svgAction.eyePic;
                    visibleEye.style.opacity = '1';
                }, 50);
            }
        })
    }
}
