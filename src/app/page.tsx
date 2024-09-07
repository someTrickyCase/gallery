export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center p-24'>
      <div className='relative h-[50vh] w-[70vw] border border-black flex flex-col items-center'>
        <h1 className='w-full h-14 text-3xl font-bold flex items-center justify-center'>Hello! </h1>
        <p className='w-full flex items-center justify-center px-10 text-lg font-light leading-5 mt-12'>
          This site will allow you to see some amazing and inspiring peaces of modern Art, provided
          by Art Institute of Chicago&apos;s API
        </p>
        <p className='mt-4 text-lg font-semibold'>Please Enjoy!</p>
        <a
          href='products'
          className='group w-64 h-16 border border-black rounded-lg absolute bottom-16 bg-black flex items-center justify-center text-white text-xl font-bold hover:bg-white hover:text-black transition-all duration-500 cursor-pointer'>
          <p className='group-hover:translate-x-[-20%] transition-all duration-500'>
            Start Enjoying!
          </p>
        </a>
        <a
          className='absolute bottom-1 font-extralight text-sm'
          href='https://github.com/someTrickyCase'>
          @someTrickyCase
        </a>
      </div>
    </main>
  );
}
