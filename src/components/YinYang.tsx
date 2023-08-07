'use client'
export default function YinYang() {
    return (
        <div>
            <div 
                className="flex flex-col justify-around items-center bg-gradient-to-r from-black from-50% to-white to-50% h-24 w-24 rounded-full border box-content border-black shadow-inner shadow-zinc-100 cursor-pointer lg:hover:animate-yin-yang lg:animate-none animate-yin-yang"
            >
                <div className="bg-black h-2 w-2 box-content border-[20px] border-white rounded-full"></div>
                <div className="bg-white h-2 w-2 box-content border-[20px] border-black rounded-full"></div>
            </div>
        </div>
    )
}