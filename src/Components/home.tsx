import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./home.css";

const Home: React.FC = () => {
    const orbitRadius = 150;

    // Spring for controlling the scroll-driven animation
    const [{ scrollAngle }, springApi] = useSpring(() => ({
        scrollAngle: 0,
        config: { tension: 120, friction: 14 }, // Spring configuration
    }));

    // Scroll event listener to update the spring value
    React.useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            springApi.start({ scrollAngle: scrollY / 10 }); // Map scrollY to an angle
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [springApi]);

    return (
        <div className="scroll-wrapper">
            <div className="orbit-container">
                <div className="central-text">Center</div>
                {[0, 90, 180, 270].map((angle, index) => (
                    <animated.div
                        key={index}
                        className="orbiting-text"
                        style={{
                            transform: scrollAngle.to((scrollAdjustedAngle) => {
                                const adjustedAngle = (scrollAdjustedAngle + angle) % 360;
                                const radian = (adjustedAngle * Math.PI) / 180;

                                const x = Math.sin(radian) * orbitRadius; // Horizontal orbit
                                const z = Math.cos(radian) * orbitRadius; // Depth
                                const y = z / 4; // Vertical offset based on depth

                                return `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
                            }),
                            opacity: scrollAngle.to((scrollAdjustedAngle) => {
                                const adjustedAngle = (scrollAdjustedAngle + angle) % 360;
                                const radian = (adjustedAngle * Math.PI) / 180;
                                return Math.cos(radian) > 0 ? 1 : 0.5; // Dim when moving to the back
                            }),
                        }}
                    >
                        Orbit {index + 1}
                    </animated.div>
                ))}
            </div>
            {/* Add content for scrolling */}
            <div className="scroll-content">
                <p>Scroll to see the springy orbit animation!</p>
                <div style={{ height: "200vh" }}></div>
            </div>
        </div>
    );
};

export default Home;
