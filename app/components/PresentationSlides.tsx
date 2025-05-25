import React from 'react'
import { PinContainer } from './ui/3d-pin'
//import Image from 'next/image'

const PresentationSlides = () => {
    return (
        <div className="py-20 w-full" id="downloads">
            <h1 className="heading">
                Project <span className="text-purple">Presentation Slides</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
    
                <PinContainer
                    title="Proposal"
                    href="https://drive.google.com/drive/folders/16biPotxh1l6WHwqJn7RGMkxYD3fIvZi8?usp=sharing"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Project Proposal
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Submitted on 2024
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                <PinContainer
                    title="Progress Presentation I"
                    href="https://drive.google.com/drive/folders/15PllIf8B9fyVld1XYLxQLaS4q498xiNu?usp=sharing"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Progress Presentation I
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Submitted on 2024
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                <PinContainer
                    title="Progress Presentation II"
                    href="https://drive.google.com/drive/folders/1KjOmlKK1pNDfYyozmf8N-gmdqXP6WV1T?usp=sharing"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Progress Presentation II
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Submitted on 2025
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                <PinContainer
                    title="Final Presentation"
                    href="#"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Final Presentation
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Will be Published Soon...
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                
                

            </div>
        </div>
    )
}

export default PresentationSlides