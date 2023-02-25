//QUESTION1
function instagramPost(handle, content, imageLink, numberOfViews, numberOfLikes) {
  this.handle = handle;
  this.content = content;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}

//QUESTION 2
let post1 = new instagramPost("Zee", "I am so happy!", "www.instagram.com", 32, 10);
console.log(post1);

let post2 = new instagramPost("that-posh-gurl", "A new day to rise and shine!", "www.instagram.com", 100, 50);
console.log(post2);


//QUESTION 3A
function createPerson( name, age, location) {
    return {
        name: name,
        age: age,
        location: location
    };
}

const person1 = createPerson ("Musa", 19, "Lekki, Lagos State");
console.log(person1);

//QUESTION 3B
function createJambScores( eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    };
}

const musaScores = createJambScores(70, 85, 82, 94);
console.log(musaScores);

Object.assign(person1, musaScores);
console.log({ person1 });

//QUESTION 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
for (const key in presidentialCandidates) {
    // console.log(key);
}
Object.getOwnPropertyNames(presidentialCandidates).forEach(( key, idx, array) => {
    console.log(`${presidentialCandidates[key]}` +" is the presidential candidate of " + `${key}`);
});