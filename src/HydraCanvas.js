import React, { useEffect, useRef } from "react";
import Hydra from "hydra-synth";

const HydraCanvas = () => {
    const canvasRef = useRef(null);
    const hydraRef = useRef(null);

    useEffect(() => {
        hydraRef.current = new Hydra({
            canvas: canvasRef.current,
            detectAudio: false,
        });

        s0.initImage("./photo.jpg");
        src(s0)
            .modulate(noise(1), () => 1.5 * Math.sin(0.1 * time))
            .out(o0);

        const resizeCanvas = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            hydraRef.current = null;
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default HydraCanvas;
