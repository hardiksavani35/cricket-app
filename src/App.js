import { useState } from 'react';
import Main from './components/MainPage';
import Popup from './components/Popup';

function App() {
    const [showPopup, setShowPopup] = useState(false);

    const setOpenPopup = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Main onPlayClick={() => setOpenPopup(true)} />
            {showPopup && <Popup onClose={closePopup} />}
        </>
    );
}

export default App;
