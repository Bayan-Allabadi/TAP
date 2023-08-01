const anagrams = [
    "oz bilal tochberer",
    "it's razorbill beachcomber",
    "och robe tilblazer",
    "bib chorizo cellarmaster",
    "thor bble carizole",
    "zll borcht aberoie",
    "brzl orche atobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
]

const rearrange = word => [...word].sort() + ''
function isAnagramInArray(anagram, arr) {
    const array = [];
    const rearrangeWord = rearrange(anagram);
    for (const wordItem of arr) {
        if (wordItem.length === anagram.length) {
            if (rearrange(wordItem) === rearrangeWord) array.push(wordItem);
        }
    }

    return array;
}

console.log(isAnagramInArray("zll borcht aberoie", anagrams));