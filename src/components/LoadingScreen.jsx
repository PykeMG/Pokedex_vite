
const LoadingScreen = () => {
    return  <div className="bg-zinc-100 h-screen flex flex-col justify-center place-items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball size-40 text-zinc-600 animate-spinner-ease-spin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M3 12h6" /><path d="M15 12h6" /></svg>
                <div className="text-center py-8">
                    <div className="loading loading-dots loading-lg"></div>
                    <h2 className="text-[#2B2B2B] text-base uppercase py-5">Finding your Pokemon...</h2>
                </div>
            </div>
};

export default LoadingScreen;