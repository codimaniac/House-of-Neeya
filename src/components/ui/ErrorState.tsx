const ErrorState = ({ error }: { error: string }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[60dvh] px-5">
            <h1 className="text-2xl font-bold mb-4">Error</h1>
            <p className="text-lg text-center text-gray-600">{error}</p>
        </div>
    )
}

export default ErrorState