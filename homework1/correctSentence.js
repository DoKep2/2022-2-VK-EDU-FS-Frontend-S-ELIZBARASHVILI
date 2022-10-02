String.prototype.replaceAt = function (index, char) {
    return this.substring(0, index) + char + this.substring(index + 1, this.length)
}

export default function correctSentence(text) {
    text = text.replaceAt(0, text.charAt(0).toUpperCase())
    if (text.charAt(text.length - 1) !== '.') {
        text = text.replaceAt(text.length, '.');
    }
    console.log(text);
    return text;
}
