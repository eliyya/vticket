'use client'
import localFont from 'next/font/local'
import BGHero from '@/img/music-background-80s-neon-80-s-hd-wallpaper-preview.jpg'
import BGBrick from '@/img/neon-light-brick-wall-texture-slide-effect-footage-4k.jpg'

const RodRangue = localFont({
    src: './fonts/Road_Rage.otf',
    weight: '100 900',
})

const Commando = localFont({
    src: './fonts/commando.ttf',
    weight: '100 900',
})

function VHSEffect() {
    return (
        <div className="absolute overflow-hidden h-full w-full pointer-events-none">
            <video
                autoPlay
                loop
                muted
                className="mix-blend-difference h-full w-full  object-cover"
            >
                <source src="/VHS-Background_Noisy.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <header
                style={{
                    backgroundImage: `url(${BGHero.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className={`h-screen w-full flex flex-col justify-center items-center relative`}
            >
                <VHSEffect />
                <h1
                    className={`${RodRangue.className} text-9xl px-5 -rotate-12 bg-clip-text text-transparent bg-gradient-to-tr to-fuchsia-500 via-red-500 from-yellow-500`}
                >
                    JORNADAS
                </h1>
                <h1
                    className={`${Commando.className} text-[5em] -rotate-12`}
                    style={{
                        WebkitTextStrokeColor: 'white',
                        WebkitTextStrokeWidth: '1px',
                        background:
                            'linear-gradient(180deg, #fff, #fff, #007fff, #ff6b00, #b55926, #b55926)',
                        // textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    SISTEMAS
                </h1>
                <div className="h-1/3 flex flex-col justify-center items-end w-1/2 text-end">
                    <h1
                        className={`${RodRangue.className} bg-clip-text text-transparent w-fit text-5xl -rotate-12 bg-gradient-to-tr to-fuchsia-500 via-red-500 from-yellow-500`}
                    >
                        2024
                    </h1>
                </div>
            </header>
            <section
                style={{
                    backgroundImage: `url(${BGBrick.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="h-screen w-screen flex flex-col justify-center items-center relative"
            ></section>
        </div>
    )
}
