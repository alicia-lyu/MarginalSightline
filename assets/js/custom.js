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

// const card1Positioner = () => {
//     const { cubeHeight, cubeWidth, cardsOffsetHeight } = offsetInfo();
//     const card1 = document.querySelector('#card1');
//     const card1TopOffset = cardsOffsetHeight
//     const card1MarginTop = '-' + card1TopOffset + 'px';;
//     card1.style.marginTop = card1MarginTop;
//     vertCardScaler(card1);
// };

// const card2Positioner = () => {
//     const { cubeHeight, cubeWidth, cardsOffsetHeight } = offsetInfo();
//     const card2 = document.querySelector('#card2');
//     const card2TopOffset = cardsOffsetHeight - cubeHeight;
//     card2.style.marginTop = '-' + card2TopOffset + 'px';
//     const card2LeftOffset = cubeWidth;
//     card2.style.marginLeft = card2LeftOffset + 'px';
//     horiCardScaler(card2);
// }

// const card3Positioner = () => {
//     const { cubeHeight, cubeWidth, cardsOffsetHeight } = offsetInfo();
//     const card3 = document.querySelector('#card3');
//     const card3TopOffset = cardsOffsetHeight - cubeHeight * 2;
//     card3.style.marginTop = '-' + card3TopOffset + 'px';
//     const card3LeftOffset = cubeWidth * 3;
//     card3.style.marginLeft = card3LeftOffset + 'px';
//     vertCardScaler(card3);
// }

// const card4Positioner = () => {
//     const { cubeHeight, cubeWidth, cardsOffsetHeight } = offsetInfo();
//     const card4 = document.querySelector('#card4');
//     const card4TopOffset = cardsOffsetHeight - cubeHeight * 3;
//     card4.style.marginTop = '-' + card4TopOffset + 'px';
//     horiCardScaler(card4);
// }

// if (cubeSample !== null) {
//     card1Positioner();
//     card2Positioner();
//     card3Positioner();
//     card4Positioner();
// }



