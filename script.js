const homeSection = document.getElementById('home');
const backgroundImages = [
    'https://as2.ftcdn.net/v2/jpg/05/86/36/87/1000_F_586368781_rhQireIu4nVvDFi2cpgwKCfdOxbQH8DD.jpg',
    'https://img.freepik.com/premium-photo/wooden-table-with-blurred-background-from-plant-wi_942686-2014.jpg?w=2000',
    'https://as2.ftcdn.net/v2/jpg/05/86/36/87/1000_F_586368782_PxHXBI3vN17mhRC0Aes9P5M4kVXOicNI.jpg',
    'https://img.freepik.com/premium-photo/natural-wood-table-with-green-wall-background-sunlight-window-created-with-generative-ai-tools_826582-3981.jpg?w=996'
];
let currentBackgroundIndex = 0;
function changeBackground() {
    homeSection.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
}
changeBackground();
setInterval(changeBackground, 3000);
