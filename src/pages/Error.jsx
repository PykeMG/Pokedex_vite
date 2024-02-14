import BackButton from '../components/BackButton';

const Error = () =>{

    return (
    <>
    <div className="relative w-full overflow-x-hidden overflow-y-auto h-screen">
    <BackButton />
        <section className="w-full h-screen flex flex-col items-center justify-center text-zinc-900 gap-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball size-48 text-zinc-600 animate-spinner-ease-spin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M3 12h6" /><path d="M15 12h6" /></svg>
            <h2 className='font-bold text-9xl text-zinc-600'>404</h2>
            <h3 className="font-bold text-4xl">Uh-oh!</h3>
            <p>You look lost on your journey!</p>
        </section>
    </div>
    </>
    );
};


export default Error;