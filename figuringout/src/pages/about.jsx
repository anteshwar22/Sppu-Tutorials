import React from "react";
import Footer from "./Footer"; // Make sure the import path is correct

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section for About */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#0f1626]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              SPPU Engineers
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are building the ultimate learning platform for SPPU engineering
            students — where theory meets real-world application.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Our Story */}
          <div>
            <div className="uppercase tracking-widest text-blue-400 text-sm font-medium mb-3">
              Our Mission
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-8">
              Helping Students Become{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                Industry-Ready Engineers
              </span>
            </h2>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                SPPU Engineers was born out of a simple frustration —
                engineering students studying hard but still feeling unprepared
                for real jobs and interviews.
              </p>
              <p>
                We create high-quality, practical tutorials, project guides, and
                resources that focus on{" "}
                <strong>understanding concepts deeply</strong> rather than just
                memorizing syntax.
              </p>
              <p>
                From React hooks to Spring Boot microservices, from DSA to
                full-stack MERN projects — we cover everything you need to stand
                out.
              </p>
            </div>
          </div>

          {/* Right - What Makes Us Different */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold mb-8">
              Why Students Love Us
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: "Real-World Focused",
                  desc: "Tutorials built from actual industry problems, not just theory",
                },
                {
                  title: "Project-Based Learning",
                  desc: "Every concept comes with complete, deployable projects",
                },
                {
                  title: "Interview Preparation",
                  desc: "Special modules designed for campus and off-campus placements",
                },
                {
                  title: "Community Driven",
                  desc: "Regular updates based on student feedback and industry trends",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              To become the most trusted learning companion for every
              engineering student in SPPU — helping them not just pass exams,
              but build a strong foundation for a successful tech career.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
   
    </div>
  );
};

export default About;
