const Hero = () => {
  return (
    <section className="relative min-h-[800px] text-white flex items-center justify-center" id="inicio">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-1 pointer-events-none"
        src="/assets/video_hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[#213041]/60 z-10" />

      <div className="relative z-20 max-w-5xl text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-xl">
          Automatização Inteligente para sua Empresa
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Transforme seus processos de negócios com automação RPA inteligente e vídeos gerados por IA. Ganhe eficiência, reduza custos e comunique com impactos.
        </p>
        <a
          href="/servicos"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#213041] hover:text-white transition"
        >
          Saiba Mais
        </a>
      </div>
    </section>
  );
};

export default Hero;
