import Section from './section'
import { useState, useEffect } from 'react'

export default function MultiSection() {
    const [selectedSection, setSelectedSection] = useState()
    const [pageWidth, setPageWidth] = useState(1)
    const [pageHeight, setPageHeight] = useState(1)

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (typeof window !== "undefined") {
            setPageWidth(window.innerWidth / 4)
            setPageHeight(window.innerWidth / 4)
            setLoading(false)
        }
    }, [])



    return (
        <>
        {loading ? (<div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin rounded-full border-4 border-t-4 border-gray-300 w-16 h-16"></div>
                </div>) 
                : 
                (<div style={{
            height: pageHeight,
            width: pageWidth
        }} className={`grid grid-flow-col grid-rows-2 gap-4`}>
        <Section />
        <Section />
        <Section />
        <Section />
        </div>)}

        </>
    )
}