export function ButtonLoader() {
    return (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    )
}

export function Loader() {
    return (
        <>
        <div
        style={{
            zIndex: 5,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
        }}>
        <div
        className="w-15 h-15 border-5 border-white border-t-transparent rounded-full animate-spin">
        </div>
        </div>
        <div className="overlay"></div>
        </>
    )
}