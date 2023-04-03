import { AppContainerProps } from "../../utils/interfaces/interfaces";

import './appContainer.scss';

const AppContainer: React.FC<AppContainerProps> = (props: AppContainerProps) => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default AppContainer;