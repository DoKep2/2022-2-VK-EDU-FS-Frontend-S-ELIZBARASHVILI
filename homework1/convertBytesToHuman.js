import InvalidConvertDataError from "./errors/InvalidConvertDataError.js"

const InfoSizeTypes = {
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
};

const Size = {
    B: 2 ** 0,
    KB: 2 ** 10,
    MB: 2 ** 20,
    GB: 2 ** 30,
    TB: 2 ** 40,
}

function getSizeType(bytes) {
    if (isNaN(bytes) || bytes <= 0) {
        throw new InvalidConvertDataError("Value should be a positive number");
    }
    if (bytes >= Size.TB) return InfoSizeTypes.TB;
    if (bytes >= Size.GB) return InfoSizeTypes.GB;
    if (bytes >= Size.MB) return InfoSizeTypes.MB;
    if (bytes >= Size.KB) return InfoSizeTypes.KB;
    if (bytes >= Size.B) return InfoSizeTypes.B;
}

export default function convertBytesToHuman(bytes) {
    let sizeType = getSizeType(bytes);
    return ((bytes / Size[sizeType]).toFixed(2) + " " + sizeType);
}
