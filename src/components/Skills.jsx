const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Programming',
      badge: 'Core Logic',
      skills: [
        { name: 'PHP', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#777BB4]" fill="currentColor"><path d="M96.79 38.64c-1.4-1.39-3.26-2.58-5.38-3.46-2.12-.89-4.52-1.55-6.95-1.92-2.42-.37-4.9-.56-7.18-.56H38.5l-6.19 32.55h11.23l2.25-11.83h20.6c3.27 0 6.13-.53 8.35-1.53 2.22-.99 3.94-2.34 5.04-3.9 1.1-1.57 1.6-3.27 1.5-4.93-.1-1.66-.75-3.13-1.87-4.22-.1-.08-.18-.14-.26-.2zm-12.03 5.4c-.65 1.12-1.78 2.05-3.32 2.7-1.55.65-3.5 1-5.74 1H50.84l1.83-9.58h21.43c2.03 0 3.65.26 4.77.74 1.12.49 1.83 1.14 2.1 1.89.28.75.25 1.5-.07 2.18-.32.68-.84 1.34-1.52 1.95v.02-.02l-.56.1zM58.75 32.7h-36L12.38 86.8h36l2.12-11.16H36.32l2.3-12.1h15.25L58.75 32.7zm51.78.2c-1.4-1.4-3.26-2.6-5.38-3.48-2.12-.89-4.52-1.55-6.95-1.92-2.42-.37-4.9-.56-7.18-.56H52.26l-10.27 54h11.23l4.33-22.75h20.6c3.27 0 6.13-.53 8.35-1.53 2.22-1 3.94-2.35 5.04-3.9 1.1-1.58 1.6-3.28 1.5-4.94-.1-1.66-.75-3.13-1.87-4.22zm-11.77 5.2c-.65 1.13-1.78 2.06-3.32 2.7-1.55.66-3.5 1-5.74 1h-24.8l1.82-9.6h21.45c2.04 0 3.66.27 4.78.75 1.12.5 1.83 1.15 2.1 1.9.28.76.25 1.5-.07 2.2-.32.67-.84 1.33-1.52 1.94v.02h-.56v-.02z"/></svg> },
        { name: 'MySQL', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#4479A1]" fill="currentColor"><path d="M51.9 66.8c-.8-1.5-1.5-3.3-1.6-3.7-2.9-7-4.8-13.6-5-14-.3-1.4-1-6.1.1-10.6 1.1-4.7 3.6-7.3 3.6-7.3 4.2 3.8 6.4 8.7 6.4 8.7 1.4-2.3 3.5-3.6 5.8-3.5 1.5.1 3 .8 4.3 2 .2 1.2.6 3.4 1 6.5-1.7 1.5-3.1 3.2-4.1 4.9.4.2 1 .3 1.7.3h.1c1.5 0 2.9-.6 4-1.8l.5-.6v1.3c0 2-.8 3.8-2 5.1h-2c0-.4.1-.7.1-1.1v-.1c-.1-1.1-.6-2.1-1.4-2.9 0 0-1.8-1.5-4.1-.5-2.2.9-3.7 2.6-4.5 5.1-1.7 5.4 0 11.2 0 11.2l-2.8 1zm42.6-3.5c-.8.7-2 1.1-3.2 1.1h-.1c-1.3 0-2.5-.5-3.5-1.3-1.1-.9-1.9-2.2-2.3-3.6-1.1.2-2.1.2-3.1 0-1.2 2-3.2 3.3-5.5 3.3H76c-2.4 0-4.6-1.5-5.5-3.8l-1.3.4c-1.2.4-2.5.6-3.7.8 2.2 4.1 6 7 10.7 8.1l-1 5.9h5.1l1.1-6c.4.1.8.1 1.2.1h1.2c.5 0 1-.1 1.5-.2l2.3 5.4h5.1l-2.9-6.9c5.2-2.3 8.3-7.6 8.3-7.6l-3.5 4.3zm-6.7-5.5c-.6 1.7-2.2 2.8-4 2.8h-.7c-2 0-3.6-1.3-4.1-3.2-1.1.3-2.1.4-3 .3 1-2.4 3.4-4.2 6.1-4.2h.7c1.7 0 3.3.9 4.1 2.3-.3.1-.7.2-1 .2-2.8 0-4.3-1.5-4.3-1.5s-1.1 2.9 1 3.9c1 .5 2.1.3 3-.3.5.7 1.3 1 2.2-.3zm-14.7.7c-1.1 1.1-2.7 1.8-4.3 1.8h-.8c-1.6 0-3.1-.7-4.1-1.9v-2.7h-4.3v5h-.4l.3-.4c1 1.3 2.5 2 4.2 2h.8c1.9 0 3.6-.9 4.7-2.3.8-1.1 1.3-2.4 1.4-3.8h2.6v2.3z"/></svg> },
        { name: 'HTML5', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#E34F26]" fill="currentColor"><path d="M27.8 107.5 19.3 12h89.3l-8.5 95.5-36 10-36.3-10z"/><path fill="#ef652a" d="m64.1 118 27.5-7.6 6.5-73.4h-34v81z"/><path fill="#fff" d="M64.1 60.1h18.6l1.2-13.4H64.1v-14h34.3L96.2 55l-2.6 28.5-29.5 8v14.4l41-11.4 4.5-50.4H64.1z"/><path fill="#ebebeb" d="M64.1 32.7v14h-17L46 32.7zm0 27.4v14h-5l-.8 8.6 15 4.1v14.4l-28.7-8L43 60.1z"/></svg> },
        { name: 'CSS3', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#1572B6]" fill="currentColor"><path d="M27.8 107.5 19.3 12h89.3l-8.5 95.5-36 10-36.3-10z"/><path fill="#33a9dc" d="m64.1 118 27.5-7.6 6.5-73.4h-34v81z"/><path fill="#fff" d="M64.1 60.1h18.6l1.2-13.4H64.1v-14h34.3L96.2 55l-2.6 28.5-29.5 8v14.4l41-11.4 4.5-50.4H64.1z"/><path fill="#ebebeb" d="M64.1 32.7v14h-17L46 32.7zm0 27.4v14h-5l-.8 8.6 15 4.1v14.4l-28.7-8L43 60.1z"/></svg> },
        { name: 'JavaScript', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#F7DF1E]" fill="currentColor"><path d="M12 12h104v104H12z"/><path fill="#000" d="M83.4 96.6c-4.4 0-8.2-1.4-11.4-4.2-3.2-2.8-5-6.5-5.3-11h11.2c.2 2.1 1.1 3.8 2.6 5 1.5 1.2 3.2 1.8 5 1.8 2 0 3.6-.6 4.9-1.8 1.3-1.2 1.9-2.7 1.9-4.5 0-1.3-.4-2.5-1.2-3.4-.8-.9-2.2-1.7-4.2-2.3l-4.7-1.5c-4.3-1.4-7.6-3.2-9.7-5.4-2.1-2.2-3.2-5.1-3.2-8.7 0-3.9 1.4-7.1 4.1-9.6 2.7-2.5 6.4-3.8 11.1-3.8 4 0 7.4 1.2 10.3 3.6 2.9 2.4 4.5 5.7 4.9 10h-10.7c-.3-1.6-1-2.9-2.1-3.9-1.1-1-2.5-1.5-4.2-1.5-1.9 0-3.3.6-4.3 1.7-1 1.1-1.5 2.5-1.5 4 0 1.2.4 2.2 1.1 3 .7.8 2.2 1.5 4.4 2.2l4.8 1.5c4 1.2 7.2 3 9.4 5.3 2.2 2.3 3.3 5.3 3.3 9.1 0 4-1.5 7.4-4.5 10s-6.9 3.9-11.6 3.9zm-40.4.1c-3.1 0-5.8-1-8.1-2.9-2.3-1.9-3.7-4.4-4.2-7.5h11c.2 1.3.8 2.4 1.8 3.2 1 .8 2.3 1.2 3.9 1.2 1.7 0 3-.4 3.9-1.3.9-.9 1.4-2 1.4-3.5V50h11.2v35.4c0 3.7-1.3 6.7-3.8 9.1s-5.9 3.6-10.2 3.6z"/></svg> }
      ]
    },
    {
      id: 2,
      title: 'Framework',
      badge: 'Development',
      skills: [
        { name: 'Laravel', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#FF2D20]" fill="currentColor"><path d="M124.6 37l-26.6-15.5c-1-.6-2.4-1.1-3.5-1.1H94L71 31.8c-1.3.7-2.3 2.5-2.3 4V48c0 1.2.9 2.1 2 2.1h.4c1.1 0 2-.9 2-2V37c0-1 .9-1.5 1.7-1.5s1.7.5 1.7 1.5v11.5c0 1.2.9 2.1 2 2.1h.4c1.1 0 2-.9 2-2V37c0-1 .9-1.5 1.7-1.5s1.7.5 1.7 1.5v30c0 1 .9 1.5 1.7 1.5s1.7-.5 1.7-1.5v-30c0-1 .9-1.5 1.7-1.5 1 0 1.7.5 1.7 1.5v43c0 1.5-1 3.2-2.2 3.9L60 100.2c-1.3.7-3.2.7-4.5 0l-26.7-15c-1.2-.7-2.2-2.5-2.2-4V51l-4.5-2.6c-1.2-.7-2.2-2.4-2.2-3.9V19c0-1.5 1-3.3 2.2-4l26.6-15.4c1.3-.7 3.2-.7 4.5 0L80.4 15c1.2.7 2.2 2.5 2.2 4v25c0 1.2-.9 2.1-2 2.1h-.4c-1.1 0-2-.9-2-2V21.6l-21.7-12c-.4-.2-1-.2-1.5 0l-22.3 13.5v20l22.4 12c.4.2 1 .2 1.5 0L78 43.6v12.3c0 1.5 1 3.3 2.2 3.9l12 6.5V93c0 .5-.2 1.2-.5 1.4L64 109c-.4.2-1 .2-1.5 0L35 93c-.4-.2-.5-.9-.5-1.4V56c0-.5.2-1.2.5-1.4L57.3 42c.4-.2 1-.2 1.5 0l22.3 12.5v4.5c0 1.2.9 2.1 2 2.1h.4c1.1 0 2-.9 2-2V49l16.3-9c1.2-.7 2.2-2.4 2.2-3.9v-25c0-1.5-1-3.3-2.2-4l-27-15.6c-1.3-.8-3.2-.8-4.5 0L44 7.6c-1.2.7-2.2 2.5-2.2 4V33l-20.4-12c-1.3-.7-3.2-.7-4.5 0L3.4 30.5c-1.3.7-2.2 2.4-2.2 3.9V65.8c0 1.5 1 3.3 2.2 3.9l46.2 26.6c1.3.8 3.2.8 4.5 0l46.2-26.6c1.3-.7 2.2-2.5 2.2-3.9V37z"/></svg> },
        { name: 'CodeIgniter', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#EF4223]" fill="currentColor"><path d="M84.2 31c-3.7-4.1-8-8.2-12-12.7C65.5 11 65 3.3 64.9 0c-4.4 7-8.2 14.1-10.9 21.6-4.5 12.5-5.3 25-1.1 37.8-8.1-11.6-9-23.7-6.2-36.9-10.8 11.2-16 25-16.7 41.7-.5 10.9 2.3 21 6.5 30.4 8.7 19.3 24.3 30 45.4 32.2-4-7.2-5.4-14.8-4-22.9 1.1-6.1 4.3-11.2 8.3-15.9 7-8.1 14.6-15.5 22.4-22.6 6.3-5.7 10.6-12.8 12.3-21.3 1.5-7.5.5-14.6-3-21.2-3.3-6.2-7.8-11.3-13.7-15V31z"/></svg> },
        { name: 'Flutter', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#02569B]" fill="currentColor"><path fill="#37cadd" d="M106.9 23.3L83.7 0 35.8 47.9l23.2 23.2z"/><path fill="#02569b" d="M59 71.1L35.8 94.3 59 117.5h32.8L68.6 94.3z"/><path fill="#02569b" d="M59 71.1L82.2 47.9l24.7 24.7z"/><path fill="#37cadd" d="M82.2 94.3L59 117.5h32.8l23.2-23.2z"/></svg> }
      ]
    },
    {
      id: 3,
      title: 'Software & Design',
      badge: 'Tools',
      skills: [
        { name: 'VS Code', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#007ACC]" fill="currentColor"><path d="M89.7 104.9l-49.2-40 49.2-40.4v80.4zm5.8 8.1L120 94.4V33.6L95.5 15l-13 10.8 28.5 23.2L68 83 45.9 64.6 8.5 94.8l64 45.1 23-16.9zm-27-21l-22.6-19.1v-.1l22.6-18.7v37.9zM120 33.6v60.8l-24.5 18.6L68 83 111 49 82.5 25.8 95.5 15zM8.5 33.2l37.4 31.4L68 45l-59.5-30.2v18.4z"/></svg> },
        { name: 'Visual Studio', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#5C2D91]" fill="currentColor"><path d="M96 15l-19 14.5L50 15 15 36.5v55L50 113l27-14.5L96 113l17-21.5v-55zm-15 67.5L59.5 64 81 45.5v37zM45.5 83L25 66l20.5-17v34z"/></svg> },
        { name: 'Figma', icon: <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#F24E1E]" fill="currentColor"><path fill="#1abcfe" d="M64 64a18 18 0 1 1 36 0 18 18 0 0 1-36 0z"/><path fill="#0acf83" d="M28 100a18 18 0 0 1 18-18h18v18a18 18 0 1 1-36 0z"/><path fill="#ff7262" d="M64 10v36h18a18 18 0 1 0 0-36H64z"/><path fill="#f24e1e" d="M28 28a18 18 0 0 0 18 18h18V10H46A18 18 0 0 0 28 28z"/><path fill="#a259ff" d="M28 64a18 18 0 0 0 18 18h18V46H46A18 18 0 0 0 28 64z"/></svg> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-accent/20">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="glass rounded-[2.5rem] p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 relative group hover:-translate-y-2 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-md">
                      0{category.id}
                    </div>
                    <h3 className="text-xl font-bold text-dark tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {category.badge}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/50 border border-primary/5 hover:bg-white hover:border-primary/20 transition-all duration-300 group/item hover:shadow-md"
                    >
                      <div className="transform transition-transform duration-300 group-hover/item:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-bold text-dark/75 group-hover/item:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
