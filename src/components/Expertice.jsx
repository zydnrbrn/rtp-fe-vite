function Expertice() {
    return <div id="expertice">
        <section className="bg-white border-b py-16 dark:bg-slate-700">
            <div className="container max-w-5xl mx-auto m-8">
                <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">Yang Kami Pelajari</h2>
                <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">Programming</h3>
                        <p className="text-gray-600 mb-8 dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, nobis?
                        <br />
                        <br />
                        Images from :
                        <a className="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                        <img src="assets/typing_code.svg" alt="" className="w-full sm:h-64 mx-auto" />
                    </div>
                </div>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <img src="assets/blog.svg" alt="" className="w-full sm:h-64 mx-auto" />
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">Blogging</h3> 
                      <p className="text-gray-600 mb-8 dark:text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                  Images from:
                  <a href="https://undraw.co/" className="text-pink-500 underline">undraw.co</a>
                  </p> 
                    </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                        <h3 className="text-3xl text-gray-800">Konten Kreator</h3>
                        <p className="text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
  
                Images from:
  
                <a className="text-pink-500 underline" href="https://undraw.co/">undraw.co</a></p>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
              <img src="assets/creative-team.svg" className="w-full sm:h-64 mx-auto" alt="" />
            </div>
                </div>
            </div>
        </section>
    </div>
}

export default Expertice;