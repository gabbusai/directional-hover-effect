import { motion, useMotionValue, useAnimation, AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import reactPic from './assets/react.svg'

type CardProps = PropsWithChildren<{
    height: string;
    width: string;
}>
function Card({height, width, children} : CardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [direction, setDirection] = useState<string | null>(null);
    const [isHovered, setHovered] = useState(false);
    const [exitDirection, setExitDirection] = useState<string | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;

        const distances = {
            top: Math.abs(y - rect.top),
            right: Math.abs(x - rect.right),
            bottom: Math.abs(y - rect.bottom),
            left: Math.abs(x - rect.left),
        };

        const minDistance = Math.min(...Object.values(distances));
        const newDirection = Object.keys(distances).find((key) => distances[key as keyof typeof distances] === minDistance);

        if (newDirection) {
            setExitDirection(newDirection);
        } else {
            setExitDirection(null);
        }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;

        const distances = {
            top: Math.abs(y - rect.top),
            right: Math.abs(x - rect.right),
            bottom: Math.abs(y - rect.bottom),
            left: Math.abs(x - rect.left),
        };

        const minDistance = Math.min(...Object.values(distances));
        const newDirection = Object.keys(distances).find((key) => distances[key as keyof typeof distances] === minDistance);

        if (newDirection) {
            setDirection(newDirection);
        } else {
            setDirection(null);
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className="relative overflow-hidden rounded-lg bg-zinc-50 grid place-items-center"
            style={{ 
                height: height,
                width: width
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={ref}
        >
            <div className={`
            z-20 text-[55px] text-center ${isHovered ? `absolute text-zinc-900` : ' absolute text-zinc-50'} `}
            ></div>
            <AnimatePresence mode="popLayout">
                {isHovered && (
                    <motion.div
                        className="absolute rounded-lg bg-red-300
                            opacity-0 mix-blend-color"
                        initial={{
                            opacity: 0,
                            x: direction === 'left' ? '-300%' : direction === 'right' ? '300%' : 0,
                            y: direction === 'top' ? '-300%' : direction === 'bottom' ? '300%' : 0,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: exitDirection === 'left' ? '-300%' : exitDirection === 'right' ? '300%' : 0,
                            y: exitDirection === 'top' ? '-300%' : exitDirection === 'bottom' ? '300%' : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ 
                            height: height,
                            width: width
                        }}
                        />
                )}
            </AnimatePresence>


            <div className="h-full w-full">
                {
                    children
                }
            </div>
        </div>
    );
}

export default Card;