import React, { useRef, useEffect } from "react";
import './assets/HomeBgr.scss'

export default function HomeBgr() {

    // const bgr0Ref = useRef(null);
    const bgr1Ref = useRef(null);
    const bgr2Ref = useRef(null);

    useEffect(() => {

        let winWid = window.innerWidth / 2;
        let winHei = window.innerHeight / 2;

        if (

            bgr1Ref.current &&
            bgr2Ref.current

        ) {
            const mouseListener = (e) => {

                bgr1Ref.current.style.backgroundPositionX = (50 + ((e.offsetX - winWid) * 0.003)) + "%";
                bgr1Ref.current.style.backgroundPositionY = (50 + ((e.offsetY - winHei) * 0.003)) + "%";
                bgr2Ref.current.style.backgroundPositionX = (50 + ((-e.offsetX - winWid) * 0.006)) + "%";
                bgr2Ref.current.style.backgroundPositionY = (50 + ((-e.offsetY - winHei) * 0.006)) + "%";



            }

            window.addEventListener("mousemove", mouseListener);

            return() => {
                window.removeEventListener("mousemove", mouseListener);
            }

        }


    }, [])


    return (
        <div id={"home-bgr-wrapper"}>

            <div id={"bgr1"} ref={bgr1Ref} />
            <div id={"bgr2"} ref={bgr2Ref} />

        </div>
    )
}
