
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
    'yesterday', 'yet', 'you', 'young', 'your', 'yourself', 'zero', 'one', 'two', 'three'
    ];
  
    const besede = [
    'Ljubezen', 'Srce', 'Dojenček','Bit', 'Krompir', 'V redu', 'Balon', 'Ljubica', 'Draga', 'Nevesta', 'Kras', 'Sanje', 'Nebesa', 'Solze', 'Ples', 'Noč', 'Sonce', 'Dež',
    'Ogenj', 'Vedno', 'Čarovnija', 'Spomini', 'Osamljen', 'Upanje', 'Zvezda', 'Nasmeh', 'Verjeti', 'Teči',
    'Poljub', 'Ocean', 'Lepo', 'Čas', 'Dom', 'Raj', 'Svoboda', 'Duša', 'Sanje', 'Srečen',
    'Moč', 'Sanje', 'Poletje', 'Zlomljen', 'Bolečina', 'Angel', 'Junak', 'Svetloba',
    'Jutri', 'Živ', 'Vera', 'Skupaj', 'Držati', 'Pasti', 'Slava', 'Rešiti', 'Oprosti',
    'Skrivnost', 'Dihati', 'Leteti', 'Zbogom', 'Spomini', 'Včeraj', 'Sprememba', 'Senca', 'Vzpon', 'Bolečina', 'Šepet', 'Tišina', 'Razdalja',
    'Strah', 'Čakanje', 'Svetloba', 'Izgubljen', 'Ocean', 'Sonce', 'Teža', 'Uspavanka', 'Čudež', 'Živ',
    'Zapomniti', 'Skrivnost', 'Zaklad', 'Diamant', 'Utrip', 'Elektrika', 'Ritem', 'Melodija',
    'Groove', 'Zabava', 'Klub', 'Plesna tla', 'Visoko', 'Pijan', 'Seks', 'Poželenje', 'Želja', 'Odvisnost',
    'Greh', 'Slab', 'Težava', 'Nevaren', 'Upornik', 'Divji', 'Rock (slo)', 'Kitara', 'Bobni',
    'Bas', 'Pevec', 'Skupina', 'Glasba', 'Zvok', 'Utrip', 'Harmonija', 'Most', 'Žalost', 'Žalovanje',
    'Solze', 'Jezen', 'Srčna bolečina', 'Osamljenost', 'Obžalovanje', 'Pogrešati', 'Razdalja', 'Slovo', 'Razhod',
    'Izdati', 'Varanje', 'Ljubosumje', 'Maščevanje', 'Svoboda', 'Osvoboditev', 'Pogum',
    'Moč', 'Uspeh', 'Denar', 'Slava', 'Slava', 'Ambicija', 'Zagon', 'Delo', 'Žrtev', 'Strast',
    'Umetnost', 'Domišljija', 'Fantazija', 'Pobeg', 'Pustolovščina', 'Pot', 'Bog', 'Vera',
    'Mir', 'Harmonija', 'Sreča', 'Galaksija', 'Simfonija', 'Kolo', 'Ura', 'Mavrica',
    'Nevihta', 'Pirat', 'Pastir', 'Kozolec', 'Kavč', 'Satelit', 'Kemija', 'Knjiga', 'Vafelj',
    'Slap', 'Svetilnik', 'Telefon', 'Snežak', 'Led', 'Nahrbtnik', 'Helikopter',
    'Pohodništvo', 'Košarka', 'Vlak', 'Piščal(ka)', 'Lubenica', 'Akvarij', 'Včeraj', 'Odrešitev',
    'Sanje', 'Vijolično', 'Nor', 'Lestenec', 'Predstavljati', 'Limonada',
    'Pozdrav', 'Valjanje', 'Strupeno', 'Formacija', 'Simfonija', 'Ognjemet', 'Živijo', 'Rjovenje', 'Angeli',
    'Zombi', 'Preživel', 'Borec', 'Dinamika', 'Revolucija', 'Nedelja', 'Sladko', 'Rojen', 'Spremembe',
    'Zatresti', 'Mesečina', 'Diamanti', 'Ogledala', 'Svoboda', 'Groza',
    'Vročina', 'Črno', 'Grenko', 'Električno', 'Ogenj', 'Teža', 'Voda',
    'Odsev', 'Sanje', 'Mesečina', 'Čudež', 'Živ', 'Metulj',
    'Pošast', 'Raj', 'Tišina', 'Svoboda', 'Izklop', 'Nevihta', 'Držati', 'Vedno', 'Grom', 
    'Simfonija', 'Za vedno', 'Revolucija', 'Ubežnik', 'Nekdo', 'Zvezde', 'Vožnja', 'Duh',
    'Orkan', 'Vžig', 'Spomin', 'Satelit', 'Iskra', 'Brezčasno', 'Mrak', 'Ustaviti', 
    'o', 'dejanje', 'pravzaprav', 'dodati', 'po', 'spet', 'proti', 'starost', 'pred', 'zrak', 
    'vse', 'tudi', 'vedno', 'sem', 'med', 'nek', 'in', 'žival', 'drugi', 'odgovor', 'pojavi se', 
    'so', 'območje', 'kot', 'vprašati', 'pri', 'nazaj', 'žoga', 'osnova', 'biti', 'lepota', 
    'ker', 'postati', 'postelja', 'bil', 'pred', 'začel', 'začeti', 'za', 'najboljši', 'boljši', 'med', 
    'velik', 'ptica', 'črna', 'modra', 'čoln', 'telo', 'knjiga', 'oba', 'dno', 'škatla', 
    'fant', 'prinese', 'zgraditi', 'zaseden', 'vendar', 'z', 'klic', 'pride', 'lahko', 'avto', 'skrb',
    'skrbno', 'nosi', 'center', 'zagotoviti', 'spremeni', 'pregledati', 'otrok', 'mesto', 'razred', 
    'jasno', 'blizu', 'hladno', 'barva', 'pridi', 'pogosto', 'pogoj', 'vsebovati', 'nadaljevati', 'nadzor', 'pokrivati', 'ustvariti', 'prečkati', 
    'križ', 'množica', 'kultura', 'temno', 'dan', 'smrt', 'odločiti', 'globoko', 'razviti', 'rana', 
    'odkriti', 'razprava', 'daljša razdalja', 'narediti', 'storiti', 'vrata', 'nariši', 'sanjariti', 
    'pijača', 'vozi', 'suho', 'zemlja', 'lažje', 'rob', 'izobraževati', 'učinek', 'napor', 'konec', 
    'sovražnik', 'uživati', 'dovolj', 'zavarovati', 'skupaj', 'osvetliti', 'dogodek', 
    'vsi', 'ravno', 'vsak', 'primer', 'zajeti', 'drugi', 'vsi', 'obraz', 'dejstva', 'padlo', 
    'družina', 'daleč', 'hitro', 'očetov', 'stran', 'se počutijo', 'polje', 'bitka', 'končno', 'najti', 
    'prijatelj', 'od', 'zgoraj', 'prepričan', 'poln', 'smešno', 'igra', 'dal', 'cilj', 'dober', 
    'vlada', 'velik', 'odrasel', 'dvigniti', 'ozemlje', 'imeti', 'tu', 'njegov', 'pošteno', 'zgodovina',
    'dom', 'človek', 'uradno', 'ura', 'milijon', 'glasba', 'narava', 'nov', 'naslednji', 'dobrodelnost', 
    'starši', 'osebnost', 'policija', 'možnost', 'stvar', 'ljudje', 'resnica', 'vloga', 'rasti', 'počitek',
    'pozdravljen', 'majhen', 'postati', 'različen', 'umetnost', 'slika', 'nastanek', 'ekologija', 'beseda', 
    'umetnost', 'zaslon', 'način', 'priložnost', 'nekako', 'ravno', 'pamet', 'spomin', 'zvest', 
    'nevaren', 'postati', 'nikoli', 'več', 'dovoliti', 'tema', 'zadnji del', 'telo', 'čudovit', 'meja', 
    'širina', 'vrsta', 'tih', 'preizkus', 'nenadoma', 'nevihta', 'odlično', 'veliko', 'močan', 
    'poseben', 'zemlja', 'jasno', 'glasba', 'ustvarjati', 'niti', 'topel', 'priložnost', 'uspešno', 
    'umiriti', 'prevod', 'veter', 'prijazen', 'vesolje', 'resničen', 'kraj', 'prostor', 'zgodba',
    'dejstvo', 'čakanje', 'želja', 'krvavo', 'divje', 'okrasitev', 'padec', 'zvezdna pot', 'jokati', 'ponavljati',
    'domačnost', 'skrivnost', 'ustvariti', 'pogledati', 'dolg', 'zasluga', 'bit', 
    'prinesen', 'skrbeti', 'nogomet', 'načelo', 'nemogoče', 'navidezno', 'deliti', 'udeležiti se', 
    'doseči', 'meja', 'zadovoljstvo', 'ponos', 'klicati', 'rezervacija', 'bližina', 'tisti',
    'pravilo', 'teči', 'reči', 'enako', 'videti', 'šola', 'morje', 'zima', 'peti', 'sedeti', 'spanje',
    'počasi', 'majhen', 'sneg', 'nekaj', 'pesem', 'zvok', 'vesolje', 'poseben', 'pomlad', 'stati',
    'oba', 'začetek', 'ostati', 'korak', 'zgodba', 'ulica', 'močan', 'učiti',
    'sonce', 'sistem', 'vzeti', 'govoriti', 'učiti', 'povedati', 'test', 'čas', 'drevo', 'poskusiti',
    'resnica', 'obrniti', 'dva', 'razumeti', 'uporabiti', 'glas', 'čakati', 'hoditi', 'želeti',
    'vojna', 'toplo', 'gledati', 'val', 'pot', 'teden', 'teža', 'orožje', 'kdaj', 'beli', 'kdo',
    'celoten', 'zakaj', 'veter', 'zima', 'želeti', 'ženska', 'beseda', 'delo', 'svet', 'letos',
    'Slovenija', 'svoje', 'nič', 'sam', 'vse', 'kot', 'dan', 'naj', 'spet', 'delati', 'zdaj', 'svet', 'treba', 'kar',
    'srce', 'sem', 'bom', 'kjer', 'sam', 'čas', 'življenje', 'smo', 'ustnice', 'več',
    'vsi', 'vsak', 'med', 'moje', 'gor', 'pesem', 'pot', 'lepo', 'menoj', 'ljubezen',
    'nam', 'refren', 'brez', 'ljubezni', 'oba', 'morda', 'otok', 'nič', 'naprej', 'sranje',
    'tam', 'kako', 'saj', 'tja', 'včasih', 'sonce', 'nikdar', 'sva', 'srca', 'čuk',
    'moj', 'tudi', 'poje', 'jaz', 'tika', 'dober', 'noč', 'duša', 'vem', 'srečen',
    'mol', 'vsaka', 'ljudmi', 'reka', 'priti', 'bil', 'nebo', 'pod', 'svojo', 'dekle',
    'pojdi', 'ljudi', 'stara', 'tako', 'prečki', 'lahko', 'bilo', 'Toni', 'enkrat', 'dan',
    'rad', 'mir', 'drugi', 'vlak', 'zrak', 'nas', 'srce', 'kje', 'preden', 'doma', 'bela',
    'čas', 'prva', 'sreča', 'danes', 'vrti', 'slišati', 'naše', 'vino', 'grozdje', 'trta',
    'brajda', 'pivo', 'šnops', 'čaj', 'kava', 'kruh', 'med', 'jabolko', 'potica', 'Mojca',
    'Ana', 'Marija', 'Maja', 'Lojze', 'Franc', 'Ljubljana', 'Maribor', 'Portorož', 'Bled',
    'Velenje', 'Slovenija', 'Amerika', 'Italija', 'Avstrija', 'Nemčija', 'Gorenjska', 'Štajerska',
    'Primorska', 'Prekmurje', 'Dolenjska', 'Notranjska', 'Koroška', 'Ptuj'
    ];
    let izbran_jezik = localStorage.getItem('languageChoice');
    if (izbran_jezik !== null) {
        izbran_jezik = parseInt(izbran_jezik); // Pretvori v številko
    } else {
        izbran_jezik = 0; // Privzeta vrednost, če jezik ni nastavljen
    }

    if (izbran_jezik === 0) {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].toLowerCase();
    } else if (izbran_jezik === 1) {
        const randomIndex = Math.floor(Math.random() * besede.length);
        return besede[randomIndex].toLowerCase();
    } else if (izbran_jezik === 2) {
        let izmenjava_jezikov = Math.floor(Math.random() * 2);
        if (izmenjava_jezikov === 0) {
            const randomIndex = Math.floor(Math.random() * words.length);
            return words[randomIndex].toLowerCase();
        } else {
            const randomIndex = Math.floor(Math.random() * besede.length);
            return besede[randomIndex].toLowerCase();
        }
    }
}

// Štetje iger
let currentRound = 0;

// Funkcija za odštevanje pred prikazom besede
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
        document.getElementById("play-again-btn").style.display = "block";
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
        stetjeElement.textContent = `Krog: ${currentRound}/${totalRounds}`;
        wordElement.textContent = getRandomWord(); // Prikaži novo besedo
        wordElement.style.pointerEvents = "auto"; // Omogoči klik
    });
});

document.getElementById("play-again-btn").addEventListener("click", () => {
    // Preusmeri uporabnika na stran index.html
    window.location.href = "index.html";
});
