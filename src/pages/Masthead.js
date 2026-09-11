const Masthead = () => {

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        e.currentTarget.style.setProperty(
            '--mouse-x',
            `${e.clientX - rect.left}px`
        );

        e.currentTarget.style.setProperty(
            '--mouse-y',
            `${e.clientY - rect.top}px`
        );
    };

  return (
    <div className="masthead">
        <div className="bubble-container bg-glow">

            <div>
                <span className="letter" style={{ '--i': 0 }}>t</span>
                <span className="letter" style={{ '--i': 1 }}>i</span>
                <span className="letter" style={{ '--i': 2 }}>m</span>
                <span className="letter" style={{ '--i': 3 }}>i</span>
                <span className="letter" style={{ '--i': 4 }}>d</span>
                <span className="letter" style={{ '--i': 5 }}>g</span>
                <span className="letter" style={{ '--i': 6 }}>e</span>
                <span className="letter" style={{ '--i': 7 }}>e</span>
                <span className="letter" style={{ '--i': 8 }}>k</span>
            </div>
            
            <div className="text-sm text-center hidden md:flex gap-2 my-4 animate-[fadeIn_0.5s_ease-out_forwards]">
                <p>Full Stack Web Developer</p>
                <p>|</p>
                <p>Creative Problem Solver </p>
                <p>|</p>
                <p>Fiber Art Enthusiast</p>
            </div>

            <div className="text-xs text-center md:hidden flex flex-col items-center gap-2 my-4 animate-[fadeIn_0.5s_ease-out_forwards]">
                <p>Full Stack Web Developer</p>
                <hr className="w-6 opacity-50" />
                <p>Creative Problem Solver </p>
                <hr className="w-6 opacity-50" />
                <p>Fiber Art Enthusiast</p>
            </div>

        </div>
    </div>
    )
}

export default Masthead