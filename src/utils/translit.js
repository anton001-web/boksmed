export const translit = (word) => {
    const wordsList = {
        'sch': 'щ',
        'yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я',
        'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
        'e': 'е', 'z': 'з', 'i': 'и', 'yi': 'й', 'k': 'к',
        'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
        'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
        'h': 'х', 'c': 'ц', 'y': 'ы',
    }

    for(const [key, val] of Object.entries(wordsList)) {
        word = word.toLowerCase().replaceAll(key, val)
    }

    return word
}