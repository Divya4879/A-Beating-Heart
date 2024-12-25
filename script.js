const audio = document.getElementById('heartbeatAudio');
        const mainHeart = document.getElementById('mainHeart');
        const normalButton = document.getElementById('normalButton');
        const crushButton = document.getElementById('crushButton');
        const excitedButton = document.getElementById('excitedButton');
        const loveButton = document.getElementById('loveButton');
        let isPlaying = false;

        function setHeartSpeed(speed, buttonText) {
            mainHeart.style.animation = `sparkle 2s ease-in-out infinite, pulse ${speed}s ease infinite`;
            audio.playbackRate = 1 / speed;
            
            normalButton.querySelector('span').textContent = 'Normal';
            crushButton.querySelector('span').textContent = 'Crush';
            excitedButton.querySelector('span').textContent = 'Excited';
            loveButton.querySelector('span').textContent = 'Love';
            
            event.currentTarget.querySelector('span').textContent = buttonText;
        }

        function toggleSound() {
            if (!isPlaying) {
                audio.play();
                isPlaying = true;
            } else {
                audio.pause();
                isPlaying = false;
                normalButton.querySelector('span').textContent = 'Normal';
                crushButton.querySelector('span').textContent = 'Crush';
                excitedButton.querySelector('span').textContent = 'Excited';
                loveButton.querySelector('span').textContent = 'Love';
            }
        }

        normalButton.addEventListener('click', (event) => {
            toggleSound();
            setHeartSpeed(1, 'Normal');
        });

        crushButton.addEventListener('click', (event) => {
            if (!isPlaying) toggleSound();
            setHeartSpeed(0.5, 'Crush');
        });

        excitedButton.addEventListener('click', (event) => {
            if (!isPlaying) toggleSound();
            setHeartSpeed(0.3, 'Excited');
        });

        loveButton.addEventListener('click', (event) => {
            if (!isPlaying) toggleSound();
            setHeartSpeed(0.1, 'Love');
        });