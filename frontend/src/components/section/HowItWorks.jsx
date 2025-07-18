const HowItWorks = ()=>{
  return(
<section className="bg-gray-900 text-gray-100 py-10 sm:py-20 px-6">
  <div className="max-w-6xl mx-auto space-y-16 text-center">
    <h2 className="sm:text-4xl text-2xl font-extrabold text-white">
      🧭 How <span className="text-pink-400">Unveil</span> Works?
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
      {[
        {
          title: "Connect",
          color: "text-pink-400",
          desc: "Connect your wallet to start posting or supporting stories anonymously.",
        },
        {
          title: "Share",
          color: "text-blue-400",
          desc: "Post your truth — anonymously or with your identity. The blockchain makes it permanent.",
        },
        {
          title: "Explore",
          color: "text-green-400",
          desc: "Browse raw, real, and verified truths shared by others across the network.",
        },
        {
          title: "Support",
          color: "text-yellow-300",
          desc: "Vote on stories that matter to you. Help surface voices that deserve to be heard.",
        },
      ].map(({ title, color, desc }, index) => (
        <div
          key={index}
          className="flex flex-col h-40 items-center bg-gray-800 rounded-2xl p-6  border border-gray-700 shadow-md hover:shadow-pink-400/20 transition-all duration-300"
        >
          <h3 className={`text-xl font-semibold mb-2 ${color}`}>{title}</h3>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default HowItWorks;