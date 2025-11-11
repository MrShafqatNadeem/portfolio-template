import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js'
import { background } from '../../profile'

const ParticlesBackground = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial dark mode state
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark-mode'));
        };

        checkDarkMode();

        // Watch for dark mode changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    // Dynamic color based on theme
    const particleColor = isDarkMode ? "#ffffff" : "#000000";
    const lineColor = isDarkMode ? "#ffffff" : "#000000";

    return (
        <div className="particle">
            {background.type === 'Snow' && <Particles
                key={`snow-${isDarkMode ? 'dark' : 'light'}`}
                height="100vh"
                width="100%"
                params={{
                    "particles": {
                        "number": {
                            "value": 75,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                            "value": particleColor
                        },
                        "size": {
                            "value": 10,
                            "random": true
                        },
                        "move": {
                            "direction": "bottom",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 5
                            }
                        }
                    }
                }} />}
            {background.type === 'Particle' && <Particles
                key={`particle-${isDarkMode ? 'dark' : 'light'}`}
                height="100vh"
                width="100vw"
                params={{
                    "particles": {
                        "collisions": {
                            "enable": true
                        },
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": particleColor,
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "color": lineColor
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "bottom",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 6,
                                "opacity": 0.4
                            },
                            "push": {
                                "particles_nb": 5
                            }
                        },
                        "retina_detect": true
                    }
                }} />}
        </div>
    )
}

export default ParticlesBackground
