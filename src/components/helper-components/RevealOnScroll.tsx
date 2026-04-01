import React from "react";

interface RevealOnScrollProps {
    children: React.ReactNode
}


const RevealOnScroll: React.FunctionComponent<RevealOnScrollProps> = (props) => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current?.classList.add("visible");
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="reveal">
            {props.children}
        </div>
    );
};

export default RevealOnScroll;