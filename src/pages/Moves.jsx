import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import BackButton from '../components/BackButton';
import {fetchMove} from '../api/fetchMoves';
import TypeCapsule from '../components/TypeCapsule';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
import { notnull } from '../utils/utils';


const Move = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const [move, setMove] = useState();

    useEffect(() => {
        async function getMoves() {
            setIsLoading(true);
            await waitFor(1000);
            const fetchedMoves = await fetchMove(id); 
            setMove(fetchedMoves);
            setIsLoading(false);
        }
        getMoves();
    }, [id]);

    if (isLoading || !move) {
        return <LoadingScreen />
    }

    return (<>
    <div className="relative overflow-x-hidden overflow-y-auto h-screen w-full bg-slate-50">
    <BackButton />
        <div className="absolute top-28 h-96 w-full opacity-30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball size-96 text-zinc-300/90" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M3 12h6" /><path d="M15 12h6" /></svg>
        </div>
        <main className="flex flex-col items-center h-full pt-24 max-w-[400px] my-0 relative w-full p-0 m-auto px-8 text-zinc-900">
            <h2 className='text-3xl font-bold text-center capitalize pb-8'>{move?.name}</h2>   
            <div className="flex w-full gap-2 items-center justify-center pb-8">
                <TypeCapsule type={move?.type}/> 
            </div>
            <section className='pt-4 pb-8 w-full'>
                <p className='font-semibold'>{move?.description}</p>
            </section> 
            <section className='w-full pb-8'>
                <h2 className='text-zinc-950 pb-1 text-2xl font-bold'>Stats</h2>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <p className='text-zinc-950 pb-1 font-extrabold uppercase'>Pow</p>
                        <p className='text-zinc-950 pb-1 text-xl font-bold'>{notnull(move?.power)}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-zinc-950 pb-1 font-extrabold uppercase'>acc</p>
                        <p className='text-zinc-950 pb-1 text-xl font-bold'>{notnull(move?.accuracy)}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-zinc-950 pb-1 font-extrabold uppercase'>pp</p>
                        <p className='text-zinc-950 pb-1 text-xl font-bold'>{notnull(move?.pp)}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-zinc-950 pb-1 font-extrabold uppercase'>prio</p>
                        <p className='text-zinc-950 pb-1 text-xl font-bold'>{notnull(move?.priority)}</p>
                    </div>
                </div>
            </section>
            <section className='w-full pb-8'>
                <h2 className='text-zinc-950 pb-1 text-2xl font-bold'>Effect</h2>
                <p className='font-semibold'>{move?.effect}</p>
            </section>
            <section className='w-full pb-8'>
                <h2 className='text-zinc-950 pb-1 text-2xl font-bold'>Target</h2>
                <p className='font-semibold'>{move?.target}</p>
            </section>
            <section className='w-full pb-8'>
                <h2 className='text-zinc-950 pb-1 text-2xl font-bold'>Class</h2>
                <p className={`${move?.class} flex items-center justify-center rounded-full text-zinc-100 p-1 font-semibold max-w-[100px]`}>{move?.class}</p>
            </section>
        </main>      
    </div>
    </>
    );
};


export default Move;