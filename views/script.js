// Seznam naključnih besed
const words = [
    "Jabolko", "Avto", "Knjiga", "Miza", "Pes", "Računalnik", 
    "Telefon", "Hiša", "Sonce", "Cvet", "Gozd", "Kolo", 
    "Reka", "Voda", "Zvezda", "Morje", "Šola", "Letalo", "Hrib", "Vrata"
];

// Posodobljen seznam naključnih besed
/*const words = [
    'Love', 'Heart', 'Baby', 'Dreams', 'Heaven', 'Tears', 'Dance', 'Night', 'Sun', 'Rain', 
    'Fire', 'Forever', 'Magic', 'Memories', 'Lonely', 'Hope', 'Star', 'Smile', 'Believe', 'Run', 
    'Kiss', 'Ocean', 'Beautiful', 'Time', 'Home', 'Paradise', 'Freedom', 'Soul', 'Dreams', 'Happy', 
    'Strength', 'Dreams', 'Summer', 'Broken', 'Heartache', 'Angel', 'Hero', 'Heaven', 'Light', 
    'Tomorrow', 'Alive', 'Faith', 'Together', 'Hold', 'Fall', 'Glory', 'Rain', 'Save', 'Sorry', 
    'Secret', 'Breathe', 'Fly', 'Forever', 'Goodbye', 'Memories', 'Yesterday', 'Change', 'Believe', 
    'Hold', 'Shadow', 'Rise', 'Pain', 'Home', 'Dream', 'Whisper', 'Silence', 'Distance', 'Hope', 
    'Fear', 'Waiting', 'Light', 'Lost', 'Ocean', 'Sun', 'Gravity', 'Lullaby', 'Wonder', 'Alive', 
    'Remember', 'Mystery', 'Treasure', 'Diamond', 'Beat', 'Electric', 'Funk', 'Rhythm', 'Melody', 
    'Groove', 'Party', 'Club', 'Dancefloor', 'High', 'Drunk', 'Sex', 'Lust', 'Desire', 'Addiction', 
    'Sin', 'Bad', 'Trouble', 'Dangerous', 'Rebel', 'Wild', 'Rock', 'Roll', 'Guitar', 'Drums', 'Bass', 
    'Singer', 'Band', 'Music', 'Sound', 'Beat', 'Harmony', 'Bridge', 'Sadness', 'Sorrow', 'Tears', 
    'Angry', 'Heartbreak', 'Loneliness', 'Regret', 'Miss', 'Distance', 'Farewell', 'Breakup', 
    'Betray', 'Cheating', 'Jealousy', 'Revenge', 'Freedom', 'Liberation', 'Courage', 'Strength', 
    'Power', 'Success', 'Money', 'Fame', 'Glory', 'Ambition', 'Drive', 'Work', 'Sacrifice', 'Passion', 
    'Art', 'Imagination', 'Fantasy', 'Escape', 'Adventure', 'Way', 'God', 'Faith', 'Religion', 
    'Peace', 'Harmony', 'Happiness', 'Galaxy', 'Symphony', 'Bicycle', 'Clock', 'Rainbow', 
    'Thunderstorm', 'Pirate', 'Dragonfly', 'Sofa', 'Satellite', 'Chemistry', 'Book', 'Waffle', 
    'Waterfall', 'Lighthouse', 'Telephone', 'Canyon', 'Snowman', 'Glacier', 'Backpack', 'Helicopter', 
    'Hiking', 'Basketball', 'Train', 'Whistle', 'Watermelon', 'Aquarium', 'Yesterday', 'Redemption', 
    'Dreams', 'Purple', 'Crazy', 'Despacito', 'Chandelier', 'Believe', 'Imagine', 'Lemonade', 
    'Hello', 'Rolling', 'Toxic', 'Formation', 'Symphony', 'Firework', 'Viva', 'Roar', 'Angels', 
    'Zombie', 'Survivor', 'Fighter', 'Dynamite', 'Revolution', 'Sunday', 'Sweet', 'Born', 'Changes', 
    'Shake', 'Moonlight', 'Diamonds', 'Lonely', 'Mirrors', 'Freedom', 'Radioactive', 'Thriller', 
    'Fever', 'Black', 'Heartbreak', 'Bittersweet', 'Electric', 'Heaven', 'Fire', 'Gravity', 'Water', 
    'Reflection', 'Dreams', 'Moonlight', 'Miracle', 'Angels', 'Lonely', 'Alive', 'Butterfly', 
    'Monster', 'Paradise', 'Silence', 'Freedom', 'Blackout', 'Storm', 'Hold', 'Always', 'Thunder', 
    'Symphony', 'Forever', 'Revolution', 'Runaway', 'Somebody', 'Starlight', 'Drive', 'Ghost', 
    'Hurricane', 'Ignition', 'Memory', 'Neon', 'Satellite', 'Spark', 'Timeless', 'Twilight', 'Stop', 
    'about', 'act', 'actually', 'add', 'after', 'again', 'against', 'age', 'ago', 'air', 'all', 
    'also', 'always', 'am', 'among', 'an', 'and', 'animal', 'another', 'answer', 'appear', 'are', 
    'area', 'as', 'ask', 'at', 'back', 'ball', 'base', 'be', 'beauty', 'because', 'become', 'bed', 
    'been', 'before', 'began', 'begin', 'behind', 'best', 'better', 'better', 'between', 'big', 
    'bird', 'black', 'blue', 'boat', 'body', 'book', 'both', 'bottom', 'box', 'boy', 'bring', 
    'brought', 'build', 'built', 'busy', 'but', 'by', 'call', 'came', 'can', 'car', 'care', 
    'carefully', 'carry', 'centre', 'certain', 'change', 'check', 'child', 'children', 'city', 
    'class', 'clear', 'close', 'cold', 'colour', 'come', 'common', 'community', 'complete', 
    'contain', 'could', 'country', 'course', 'create', 'cried', 'cross', 'cry', 'cut', 'dark', 'day', 
    'decide', 'decided', 'deep', 'develop', 'did', 'didn’t', 'different', 'do', 'does', 'dog', 
    'don’t', 'door', 'down', 'draw', 'dream', 'drive', 'dry', 'during', 'each', 'early', 'earth', 
    'east', 'easy', 'eat', 'effort', 'enough', 'every', 'example', 'experience', 'explain', 'eye', 
    'face', 'fact', 'false', 'family', 'far', 'farm', 'fast', 'father', 'feel', 'feet', 'few', 'field', 
    'find', 'fire', 'first', 'fish', 'five', 'fly', 'follow', 'food', 'form', 'found', 'four', 
    'friend', 'from', 'front', 'full', 'game', 'gave', 'get', 'girl', 'give', 'go', 'gold', 'good', 
    'got', 'government', 'great', 'green', 'ground', 'group', 'grow', 'guy', 'had', 'half', 'hand', 
    'happen', 'happened', 'hard', 'has', 'have', 'he', 'hear', 'heat', 'heavy', 'help', 'her', 'here', 
    'high', 'his', 'hold', 'home', 'horse', 'hot', 'hour', 'house', 'hundred', 'I', 'idea', 'if', 
    'important', 'in', 'inch', 'include', 'into', 'is', 'island', 'it', 'just', 'keep', 'kind', 
    'king', 'knew', 'know', 'known', 'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 
    'lead', 'learn', 'leave', 'left', 'less', 'let', 'letter', 'life', 'light', 'like', 'line', 
    'list', 'listen', 'little', 'live', 'long', 'look', 'love', 'low', 'machine', 'made', 'make', 
    'man', 'many', 'map', 'mark', 'may', 'mean', 'measure', 'men', 'might', 'mile', 'million', 
    'mind', 'minute', 'miss', 'money', 'month', 'moon', 'more', 'morning', 'most', 'mother', 
    'mountain', 'move', 'much', 'music', 'must', 'my', 'name', 'nation', 'near', 'need', 'never', 
    'new', 'next', 'night', 'no', 'north', 'note', 'notice', 'noun', 'now', 'number', 'object', 
    'of', 'off', 'office', 'often', 'oh', 'oil', 'old', 'on', 'once', 'one', 'only', 'open', 'or', 
    'order', 'other', 'our', 'out', 'over', 'page', 'pair', 'part', 'pass', 'passed', 'people', 
    'perhaps', 'person', 'picture', 'place', 'plan', 'plane', 'plant', 'play', 'point', 'power', 
    'probably', 'problem', 'product', 'provide', 'pull', 'put', 'question', 'quick', 'rain', 'ran', 
    'reach', 'read', 'ready', 'real', 'receive', 'record', 'red', 'relationship', 'remember', 
    'right', 'river', 'road', 'rock', 'room', 'round', 'rule', 'run', 'said', 'same', 'saw', 'say', 
    'school', 'science', 'sea', 'season', 'second', 'see', 'seem', 'self', 'sentence', 'serve', 
    'set', 'several', 'shape', 'she', 'ship', 'short', 'should', 'show', 'shown', 'side', 'simple', 
    'since', 'sing', 'sit', 'six', 'size', 'sleep', 'slow', 'small', 'snow', 'so', 'some', 
    'something', 'song', 'soon', 'sound', 'south', 'space', 'special', 'spell', 'spring', 'stand', 
    'star', 'start', 'stay', 'step', 'stood', 'stop', 'story', 'street', 'strong', 'study', 'such', 
    'summer', 'sun', 'system', 'take', 'talk', 'teach', 'tell', 'ten', 'test', 'than', 'that', 'the', 
    'their', 'them', 'then', 'there', 'these', 'they', 'thing', 'think', 'this', 'those', 'though', 
    'thought', 'thousand', 'three', 'through', 'time', 'to', 'together', 'told', 'too', 'took', 'top', 
    'toward', 'town', 'travel', 'tree', 'try', 'true', 'turn', 'two', 'under', 'understand', 'until', 
    'up', 'upon', 'us', 'use', 'usual', 'very', 'voice', 'vowel', 'wait', 'walk', 'want', 'war', 
    'warm', 'was', 'watch', 'water', 'wave', 'way', 'we', 'week', 'weight', 'were', 'west', 'what', 
    'wheel', 'where', 'which', 'white', 'who', 'whole', 'why', 'will', 'wind', 'winter', 'wish', 
    'with', 'woman', 'women', 'wonder', 'word', 'work', 'world', 'would', 'write', 'year', 'yes', 
    'yesterday', 'yet', 'you', 'young', 'your', 'yourself', 'zero'
];*/

// Pridobimo število rund iz Local Storage
const totalRounds = parseInt(localStorage.getItem('roundCount')) || 1;

// Poišči elemente
const wordElement = document.getElementById("word");
const nadpisElement = document.getElementById("nadpis");
const stetjeElement = document.getElementById("stetje");

// Stanje za sledenje prvega klika
let firstClick = true;

// Funkcija za prikaz naključne besede
function getRandomWord() {
    const words = [
        "Jabolko", "Avto", "Knjiga", "Miza", "Pes", "Računalnik",
        "Telefon", "Hiša", "Sonce", "Cvet", "Gozd", "Kolo",
        "Reka", "Voda", "Zvezda", "Morje", "Šola", "Letalo", "Hrib", "Vrata"
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Štetje iger
let currentRound = 0;

// Funkcija za odštevanje
function countdown(callback) {
    let count = 3;
    nadpisElement.textContent = `Odštevanje: ${count}`;
    wordElement.textContent = "..."; // Nadomestno sporočilo
    wordElement.style.pointerEvents = "none"; // Onemogoči klik med odštevanjem
    
    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            nadpisElement.textContent = `Odštevanje: ${count}`;
        } else {
            clearInterval(interval);
            callback(); // Pokliči funkcijo za prikaz besede
        }
    }, 1000);
}

// Ob kliku spremeni besedo ali besedilo
wordElement.addEventListener("click", () => {
    if (currentRound >= totalRounds) {
        nadpisElement.textContent = "Igra je končana!";
        wordElement.style.pointerEvents = "none"; // Onemogoči nadaljnje klike
        return;
    }

    if (firstClick) {
        nadpisElement.textContent = "Računalnik je izbral besedo ...";
        firstClick = false;
    }

    // Začni odštevanje in nato prikaži novo besedo
    countdown(() => {
        currentRound++;
        nadpisElement.textContent = "Računalnik je izbral besedo ...";
        stetjeElement.textContent = `Runda: ${currentRound}/${totalRounds}`;
        wordElement.textContent = getRandomWord(); // Prikaži novo besedo
        wordElement.style.pointerEvents = "auto"; // Omogoči klik
    });
});
