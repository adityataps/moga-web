import React, { useRef, useEffect } from "react";
import './assets/Test.scss'
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";


export default function Test() {

    const layer1Ref = useRef(null);
    const layer2Ref = useRef(null);
    const layer3Ref = useRef(null);
    const layer4Ref = useRef(null);
    const layer5Ref = useRef(null);


    useEffect(() => {

        if (layer1Ref.current && layer2Ref.current && layer3Ref.current) {

            let winWid = window.innerWidth / 2;
            let winHei = window.innerHeight / 2;

            const mouseListener = (e) => {
                layer1Ref.current.style.backgroundPositionX = (50 + ((e.offsetX - winWid) * 0.05)) + "%";
                layer1Ref.current.style.backgroundPositionY = (50 + ((e.offsetY - winHei) * 0.05)) + "%";
                layer2Ref.current.style.backgroundPositionX = (50 + ((e.offsetX - winWid) * 0.025)) + "%";
                layer2Ref.current.style.backgroundPositionY = (50 + ((e.offsetY - winHei) * 0.025)) + "%";
                layer3Ref.current.style.backgroundPositionX = (20 + ((e.offsetX - winWid) * -0.005)) + "%";
                layer3Ref.current.style.backgroundPositionY = (80 + ((e.offsetY - winHei) * -0.01)) + "%";
            }

            window.addEventListener("mousemove", mouseListener);

            return () => {
                window.removeEventListener("mousemove", mouseListener)
            }


        }

        // if (layer2Ref && layer2Ref.current) {
        //     layer2Ref.current.addEventListener("mousemove", (e) => {
        //         layer2Ref.current.style.backgroundPositionX = (-e.offsetX * 0.010 + 5) + "vw";
        //         layer2Ref.current.style.backgroundPositionY = (-e.offsetY * 0.010 - 10) + "vh";
        //     })
        // }

    }, [])




    // const layer1Move = () => {
    //     layer1Ref.addEventListener("mousemove", (e) => {
    //         layer1Ref.style.backgroundPositionX = (-e.offsetX * 0.05 + 50) + "vw";
    //         layer1Ref.style.backgroundPositionY = (-e.offsetY * -0.05 + 45) + "%";
    //     })
    // }

    // if (layer1Ref != null) {
    //     document.getElementById("test1").addEventListener("mousemove", (e) => {
    //         document.getElementById("test1").style.backgroundPositionX = (-e.offsetX * 0.05 + 50) + "vw";
    //         document.getElementById("test1").style.backgroundPositionY = (-e.offsetY * -0.05 + 45) + "%";
    //     })
    // }



    return (
        <OverlayScrollbarsComponent className={"test-wrapper"}>

            <div id={"test1"} ref={layer1Ref} />
            <div id={"test2"} ref={layer2Ref} />
            <div id={"test3"} ref={layer3Ref} />

            {/*{() => {*/}
            {/*    document.getElementById("test1").addEventListener("mousemove", (e) => {*/}
            {/*        document.getElementById("test1").style.backgroundPositionX = (-e.offsetX * 0.2) + "px";*/}
            {/*        document.getElementById("test1").style.backgroundPositionY = (-e.offsetY * 0.2) + "px";*/}
            {/*    })*/}
            {/*}}*/}

        </OverlayScrollbarsComponent>
    )
}