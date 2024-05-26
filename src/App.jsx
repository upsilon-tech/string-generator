import { useState } from "react"

import './App.css'
import Footer from "./components/Footer/Footer"
import Generator from "./components/Generator/Generator"
import StringValueOutput from "./components/StringValueOutput/StringValueOutput"

function App() {
    const [stringValue, setStringValue] = useState("")
    const [isCopied, setIsCopied] = useState(false)

    return (
        <div>
            <main>
                <section className="section-title">
                    <h1 className="title">String generator</h1>
                </section>
                <StringValueOutput stringValue={stringValue} isCopied={isCopied} setIsCopied={setIsCopied}/>
                <Generator setStringValue={setStringValue} setIsCopied={setIsCopied}/>
            </main>
            <Footer />
        </div>
    )
}

export default App
