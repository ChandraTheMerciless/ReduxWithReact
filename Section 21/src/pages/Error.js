import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error has occurred!</h1>
                <p>Could not find the page!</p>
            </main>
        </>
    );

}

export default ErrorPage;