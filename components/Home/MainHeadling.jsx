import React from 'react'

const MainHeadling = () => {
  return (
    <section className="py-16">
    <div className="container mx-auto max-w-4xl px-4 text-center">
      <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
        Email Creation{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
          Simplified
        </span>
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        ComposeFlow transforms the way you build emails. Our intuitive editor makes it easy to create
        professional-looking emails that engage your audience and drive results.
      </p>
    </div>
  </section>
  )
}

export default MainHeadling