import React from 'react';

export default function Home() {
  return (
    <>
      <div className="container w-full m-auto mt-8">
        <div className="hero flex h-screen items-center">
          <div className="hero__flex-item flex-1">
            <p className="mb-8">Hi, I'm Bodhi 👋</p>

            <div className="h-1 w-56 bg-purple-600 mb-8" />

            <div className="hero-inner">
              <p className="md:text-5xl text-3xl">
                Software developer based in Belgium. I love to <span className="font-bold text-purple-600">create</span>{' '}
                and <span className="font-bold text-purple-600">help</span> businesses grow even further than they can
                imagine.
              </p>
            </div>
          </div>

          <div className="hero__flex-item flex-1">
            <p>hier moet een image komen</p>
          </div>
        </div>
      </div>
    </>
  );
}
