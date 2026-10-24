document.addEventListener('DOMContentLoaded', () => {
    
    
    let count = 0;
    const counterVal = document.getElementById('counter-val');
    
    function updateCounter(newValue) {
        count = newValue;
        counterVal.textContent = count;
    }

    document.getElementById('btn-inc').addEventListener('click', () => {
        updateCounter(count + 1);
    });

    document.getElementById('btn-dec').addEventListener('click', () => {
        if (count > 0) {
            updateCounter(count - 1); 
        }
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
        updateCounter(0);
    });


   
    const textInput = document.getElementById('text-input');
    const textPreview = document.getElementById('text-preview');
    const charCount = document.getElementById('char-count');
    const btnClear = document.getElementById('btn-clear');

    textInput.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val.trim() === '') {
            textPreview.textContent = 'Your text will appear here';
            charCount.textContent = '0';
        } else {
            textPreview.textContent = val;
            charCount.textContent = val.length;
        }
    });

    btnClear.addEventListener('click', () => {
        textInput.value = '';
        textPreview.textContent = 'Your text will appear here';
        charCount.textContent = '0';
        textInput.focus(); 
    });


    
const imgSelect = document.getElementById('img-select');
const switcherImg = document.getElementById('switcher-img');
const imgCaption = document.getElementById('img-caption');

const imagesData = {
    apple: { src: 'images/apple.png', alt: 'Applejack', caption: 'Caption: Applejack - Earth Pony' },
    dash: { src: 'images/dash.png', alt: 'Rainbow Dash', caption: 'Caption: Rainbow Dash - Pegasus' },
    fluttershy: { src: 'images/fluttershy.png', alt: 'Fluttershy', caption: 'Caption: Fluttershy - Pegasus' },
    pinky: { src: 'images/pinky.png', alt: 'Pinkie Pie', caption: 'Caption: Pinkie Pie - Earth Pony' },
    rarity: { src: 'images/rarity.png', alt: 'Rarity', caption: 'Caption: Rarity - Unicorn' },
    twi: { src: 'images/twi.png', alt: 'Twilight Sparkle', caption: 'Caption: Twilight Sparkle - Princess / Unicorn' }
};

imgSelect.addEventListener('change', (e) => {
    const selectedKey = e.target.value;
    const data = imagesData[selectedKey];
    if (data) {
        switcherImg.src = data.src;
        switcherImg.alt = data.alt;
        imgCaption.textContent = data.caption;
    }
});


    
    const keyboardInput = document.getElementById('keyboard-input');
    const keyStatus = document.getElementById('key-status');
    const submittedResult = document.getElementById('submitted-result');

    keyboardInput.addEventListener('keydown', (e) => {
        keyStatus.textContent = e.key;

       
        if (e.key === 'Enter') {
            e.preventDefault(); 
            submittedResult.textContent = keyboardInput.value;
        }

        // Нажатие Escape
        if (e.key === 'Escape') {
            keyboardInput.value = '';
            submittedResult.textContent = '';
            keyStatus.textContent = 'None';
        }
    });


   
    const focusTarget = document.getElementById('focus-target');
    const focusStatus = document.getElementById('focus-status');

    function handleActivate() {
        focusTarget.classList.add('highlight');
        focusStatus.textContent = 'Status: Card is highlighted (triggered by mouseenter or focus).';
    }

    function handleDeactivate() {
        focusTarget.classList.remove('highlight');
        focusStatus.textContent = 'Status: Card is inactive (triggered by mouseleave or blur).';
    }

    // События мыши
    focusTarget.addEventListener('mouseenter', handleActivate);
    focusTarget.addEventListener('mouseleave', handleDeactivate);

    // События фокуса с клавиатуры
    focusTarget.addEventListener('focus', handleActivate);
    focusTarget.addEventListener('blur', handleDeactivate);

});