import { useEffect, useState } from 'react';

import './trailerModal.scss';

interface TrailerModalProps {
    videoId: string,
    onHide: () => void
}

const TrailerModal: React.FC<TrailerModalProps> = (props: TrailerModalProps) => {

    const [show, setShow] = useState(false);

    const hide = () => {
        setShow(false);
        props.onHide();
    };

    useEffect(() => {
        if (props.videoId) setShow(true);
    }, [props.videoId]);

    return (
        <div className={`modal ${show ? "show" : ""}`} onClick={() => hide()}>
            <div className="modal__overlay"></div>
            <div className="modal__content">
                <div className="modal__header">
                    <button className="modal__close-button" onClick={() => hide()}>&#10005;</button>
                </div>
                {show ? <iframe src={props.videoId} title='trailer'/> : null}
            </div>
        </div>
    );
}

export default TrailerModal;