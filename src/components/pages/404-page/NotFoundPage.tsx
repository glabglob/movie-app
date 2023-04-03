import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import AppContainer from "../../container/AppContainer";

import './notFoundPage.scss';

const NotFoundPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="404 Not Found Page" />
                <title>404 Not Found</title>
            </Helmet>
            <main className="not__found" >
                <AppContainer>
                    <article className="not__found-page">
                        <h2 className="not__found-text title">404</h2>
                        <p className="not__found-text subtitle">Oops! This page was not found.</p>
                        <p className="not__found-text description">Not all who wander are lost. Unfortunately, in this case it look like you are. This page does not seem to exist. Don’t feel bad, let us help you get back on your way!</p>
                        <Link to={'/'} className="not__found-text link">Head Back To A Home Page</Link>
                    </article>
                </AppContainer>
            </main>
        </>
    );
}

export default NotFoundPage;