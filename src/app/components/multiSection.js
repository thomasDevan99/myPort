import { useState, useEffect, useRef } from 'react'
import Section from './section'

export default function MultiSection() {
    const [selectedSection, setSelectedSection] = useState()
    const [pageWidth, setPageWidth] = useState(1)
    const [pageHeight, setPageHeight] = useState(1)

    const [loading, setLoading] = useState(true)

    const updateWindowSize = () => {
        setPageWidth(window.innerWidth / 2)
        setPageHeight(window.innerHeight / 2)
    }

    useEffect(() => {
        // Check if window is defined
        if (typeof window !== 'undefined') {
            updateWindowSize()
            setLoading(false)

            // Add resize event listener
            window.addEventListener('resize', updateWindowSize)

            // Cleanup event listener when component unmounts
            return () => window.removeEventListener('resize', updateWindowSize)
        }
    }, []) // Empty dependency array means this effect runs only once on mount

    return (
        <>
            

                    <div
                        style={{
                            height: pageHeight,
                            width: pageWidth,
                            visibility: !loading ? 'visible' : 'hidden'
                        }}
                        className={`grid grid-flow-col grid-rows-2 gap-4 justify-items-center`}
                    >
                        <Section name={"Projects"} />
                        <Section name={"Work"} />
                        <Section name={"Games"} />
                        <Section name={"Contact"} />
                    </div>
            
        </>
    )
}


