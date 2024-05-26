import { useState } from "react"

import "./Generator.css"

import { generateCharcodesArray } from "../../utils/charcodesGenerator"

import Length from "./Options/Length"
import Paramaters from "./Options/Paramaters"
import { getRandomCharacters } from "../../utils/getRandomCharacters"

const NUMBER_CHARCODES = generateCharcodesArray(48, 57)
const SYMBOLS_CHARCODES = [33, 40, 41, 45, 46, 63, 91, 93, 95, 96, 126, 59, 58, 64, 35, 36, 37, 94, 38, 42, 43, 61]
const UPPER_CHARCODES = generateCharcodesArray(65, 90)
const LOWER_CHARCODES = generateCharcodesArray(97, 122)

const Generator = ({setStringValue, setIsCopied}) => {
    const [parameters, setParameters] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    })
    
    const [stringValueLength, setStringValueLength] = useState(24)

    const generateStringValue = (parameters, length) => {

        setIsCopied(false)

        if(!parameters.uppercase && !parameters.lowercase && !parameters.numbers && !parameters.symbols) {
            return "You must select 1 option at least"
        }
        let charcodes = []
        if(parameters.lowercase)  charcodes = charcodes.concat(LOWER_CHARCODES)
        if(parameters.uppercase) charcodes = charcodes.concat(UPPER_CHARCODES)
        if(parameters.numbers) charcodes = charcodes.concat(NUMBER_CHARCODES)
        if(parameters.symbols) charcodes = charcodes.concat(SYMBOLS_CHARCODES)
        return getRandomCharacters(charcodes, length)
    }

    return (
        <article>
            <Paramaters parameters={parameters} setParameters={setParameters} />
            <Length stringValueLength={stringValueLength} setStringValueLength={setStringValueLength} />
            <div className="button-container">
                <button  className="generate-button" onClick={() => setStringValue(generateStringValue(parameters, stringValueLength))}>Generate</button>
            </div>
        </article>
    )
}
export default Generator