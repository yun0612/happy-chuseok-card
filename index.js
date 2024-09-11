const messages = [
    "한가위에는 온 가족의 행복이 가득하길 기원합니다. 🌕👨‍👩‍👧‍👦", 
    "달빛처럼 밝고 풍성한 한가위 보내세요. 🌝✨", 
    "추석에는 따뜻한 정과 행복이 가득하길 바랍니다. 💖🌾", 
    "가족과 함께하는 풍요로운 한가위, 행복이 가득하길 기원합니다. 🥮🏡", 
    "보름달처럼 둥글고 풍성한 한가위 보내세요. 🌕🍂", 
    "달빛과 함께하는 한가위, 소중한 사람들과 따뜻한 시간 되세요. 🌙💫", 
    "추석의 달이 모든 소망을 이뤄주기를 기원합니다. 🌕🌟", 
    "행복한 추석, 가족과 함께하는 시간 속에서 행복이 가득하길 바랍니다. 🎉👨‍👩‍👧‍👦", 
    "한가위의 달빛이 당신의 가슴을 따뜻하게 비추길 기원합니다. 🌕❤️", 
    "가족의 웃음과 사랑이 가득한 한가위 되세요. 😊🏡", 
    "달과 같은 풍성한 행복이 가득한 추석 되세요. 🌝💫", 
    "추석의 기쁨과 행복이 당신의 삶에 가득하길 바랍니다. 🌾🎊", 
    "한가위에 담긴 행복과 사랑이 당신의 마음을 따뜻하게 해주길 바랍니다. 💕🌟", 
    "보름달처럼 밝은 마음으로 행복한 한가위 되세요. 🌕😊", 
    "추석의 즐거운 분위기와 함께 풍성한 행복을 느끼세요. 🎉🌾", 
    "가족과의 소중한 시간이 가득한 한가위 보내세요. 🏠👨‍👩‍👧‍👦", 
    "한가위의 달처럼 넉넉한 마음과 행복이 함께하길 바랍니다. 🌕💖", 
    "달이 밝은 추석, 사랑과 행복이 가득한 시간 되세요. 🌙💕", 
    "추석의 축복과 기쁨이 당신의 하루를 환하게 비추길 기원합니다. 🌟🌾", 
    "한가위의 풍요와 행복이 가득한 하루 되세요. 🍂🌝", 
    "가족과 함께하는 따뜻한 한가위, 행복이 가득하길 바랍니다. 🥮👨‍👩‍👧‍👦", 
    "보름달처럼 밝고 넉넉한 마음으로 한가위를 맞이하세요. 🌕💫", 
    "추석의 기운이 당신의 삶에 행복과 풍요를 더해주길 기원합니다. 🌟🍂", 
    "한가위의 달빛 아래, 사랑과 행복이 함께하길 바랍니다. 🌙💕", 
    "행복한 추석, 소중한 사람들과 따뜻한 시간을 보내세요. 🥰🎉", 
    "달빛이 환한 한가위, 마음이 따뜻해지는 시간 되세요. 🌕💖", 
    "가족과 함께하는 한가위, 행복과 웃음이 가득하길 기원합니다. 😄🏡", 
    "한가위의 달처럼 넉넉하고 풍요로운 마음으로 보내세요. 🌝💛", 
    "추석의 축복이 가득한 하루, 가족과 함께 행복한 시간 되세요. 🎊🏠", 
    "달빛 아래 소중한 사람들과 함께하는 한가위, 행복이 가득하길 바랍니다. 🌙❤️"
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.
    isAnimating = true; // 애니메이션이 시작됨을 표시합니다.

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false; // 애니메이션이 끝났음을 표시합니다.
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.

    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVisibility(postcardElement, false);
    toggleVisibility(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVisibility(nameElement, true);
        });
        toggleVisibility(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage(); 
};
