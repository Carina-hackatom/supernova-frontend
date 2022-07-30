import clsx from "clsx";

type ArrowProps = {
    rotateTop : boolean;
    style? : string;
}
export const Arrow = ({rotateTop, style} : ArrowProps) => {
    return ( 
        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={clsx("opacity-50 hover:opacity-100", rotateTop ? `rotate-180 transform ${style ? style : 'fill-black'}` : "fill-black")}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.58453 14L9.52715 21.6027L16.46 14.0001L19.0461 16.3584L9.52896 26.7951L0 16.3601L2.58453 14Z"/>
        </svg>
    )
}       