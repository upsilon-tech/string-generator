import { Icon } from "@iconify/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './StringValueOutput.css';

const StringValueOutput = ({ stringValue, isCopied, setIsCopied }) => {
    return (
        <div className="stringValue-output-container">
            <div className="input-button-container">
                <input
                    className="stringValue-input"
                    disabled
                    value={stringValue}
                    placeholder="u:HW*(TT9T_TVVSiClxRF!fv"
                />
                <CopyToClipboard text={stringValue} onCopy={() => setIsCopied(true)}>
                    <button
                        className="copy-button"
                        disabled={!stringValue}
                    >
                        <Icon icon={isCopied ? "iconamoon:check-bold" : "bxs:copy"} />
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default StringValueOutput;
