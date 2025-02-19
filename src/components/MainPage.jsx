import './Main.css';

export default function Main({ onPlayClick }) {
    return (
        <div className="main-container">
            <button className="play-button" onClick={onPlayClick}>Let's Play</button>
        </div>
    );
}