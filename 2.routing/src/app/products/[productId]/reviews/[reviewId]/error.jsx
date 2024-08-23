"use client";

export default function ErrorBoundary({ error, reset }) {
    return <div> Error in rewievId: { error.message } <button onClick={reset}> Try again </button> </div>
}