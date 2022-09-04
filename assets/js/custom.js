// Navbar decoration
const collapseItem = document.querySelector('.collapse');
const tabName = document.querySelector('#tabName');
const mainNavbar = document.querySelector('#mainNavbar')
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
const oppoTitleScaler = (oppoTitle) => {
    const oppoTitleW = parseInt(oppoTitle.style.width);
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
        if (svgPath !== null) {
            svgActions.push({svgPath, eyePic});
        } else {
            return null
        }
    }
    return svgActions;
}

const svgActions = spotSvgActions();
let visibleEye = document.querySelector('#eye0');
let hoveredItem = undefined;
let timeoutID = undefined;

if (svgActions !== null) {
    for (let svgAction of svgActions) {
        svgAction.svgPath.addEventListener('mouseover', () => {
            if (hoveredItem !== svgAction.svgPath) {
                if (typeof timeoutID === 'number') {
                    clearTimeout(timeoutID);
                }
                hoveredItem = svgAction.svgPath;
                let timeoutID = setTimeout(() => {
                    visibleEye.style.opacity = '0';
                    visibleEye = svgAction.eyePic;
                    visibleEye.style.opacity = '1';
                }, 1000);
            }
        })
    }
}

// const switchButton = document.querySelector('#switchButton');
// const whole = document.querySelector('#whole');
// const visibleAtFirst = document.querySelector('#visibleAtFirst');
// const coveringEyes = document.querySelector('#coveringEyes');
// const fade = () => {
//     try {
//         switchButton.addEventListener('click', () => {
//             if (whole.style.opacity === '0') {
//                 whole.style.opacity = '1';
//                 visibleAtFirst.style.display = 'none';
//                 coveringEyes.style.display = 'none';
//             } else {
//                 whole.style.opacity = '0';
//                 visibleAtFirst.style.display = 'block';
//                 coveringEyes.style.display = 'block';
//             }
//         })
        
//     } catch (error) {
//         console.log(error)
//     }
// }
