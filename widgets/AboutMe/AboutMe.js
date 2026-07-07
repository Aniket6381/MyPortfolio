"use client"

const AboutMe = () => {
    return (
        <section className="mt-20 mx-20 min-h-screen">
            <p className="text-4xl text-white leading-loose">I'm a Full Stack Developer who enjoys transforming complex ideas into fast, scalable, and intuitive digital experiences. With over 3+ years of experience, I specialize in building enterprise-grade web applications using React, Next.js, Node.js, Express.js, and MongoDB. From architecting RESTful APIs to crafting pixel-perfect user interfaces, I focus on writing clean, maintainable code that delivers real business value.</p>

            <div className="grid grid-cols-3 items-center justify-center mt-10">
                <div className="">
                    <div className="text-purple-700 text-7xl text-center" style={{ fontFamily: "Lato-Bold" }}>3+</div>
                    <div className="text-center">Years of Experience</div>
                </div>
                <div className="">
                    <div className="text-purple-700 text-7xl text-center" style={{ fontFamily: "Lato-Bold" }}>15+</div>
                    <div className="text-center">Projects Delivered</div>
                </div>
                <div className="">
                    <div className="text-purple-700 text-7xl text-center" style={{ fontFamily: "Lato-Bold" }}>25+</div>
                    <div className="text-center">Skills Mastered</div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe