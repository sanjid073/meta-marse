import React from "react";
import "./Home.css";
import logo from "../../img/logo.jpg";
import link_icon from "../../img/external-link.png";
import copy_icon from "../../img/icons8-copy-30.png";
import art1 from "../../img/art1.jpeg";
import art2 from "../../img/art2.jpeg";
import art3 from "../../img/art3.jpeg";
import art4 from "../../img/art4.jpeg";
import art5 from "../../img/art5.jpeg";
import artBox from "../../img/box.png";
import nftMask from "../../img/Screenshot_2022-03-10_000035-removebg-preview.png";

const Home = () => {
  return (
    <div className="home-body">
      {/* navbar */}
      <header>
        <div className="container mx-auto">
          <nav class="bg-transparent	 px-2 sm:px-4 py-2.5 rounded ">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
              <a href="/" class="flex items-center logo-img">
                <img src={logo} alt="" />
              </a>
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <a
                      href="/"
                      class="block py-3 px-4 text-gray-700 bg-white rounded-xl"
                    >
                      Connect Wallet
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="md:ml-10 ml-10">
        <section className="link-box mt-0 container mx-auto ">
          <div className=" flex items-center">
            <h3 className="text-white text-xl mr-2">0x6091...b47c</h3>
            <img className="link-icon" src={link_icon} alt="" />
          </div>
          <div className="container mx-auto mt-2 flex items-center ">
            <p className="text-gray-400 text-sm  mr-2">0x6091...b47c</p>
            <img className="copy-icon" src={copy_icon} alt="" />
          </div>
          <hr className="w-1/4 mt-1" />
        </section>

        {/* nft art */}
        <section className="nft-art mt-10">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mx-auto">
              <div className="nft-simples">
                <div className="grid md:grid-cols-3 grid-cols-2 grid-rows-3">
                  <div className="flex items-center">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art1} alt="" />
                      <div className="art-box ">
                      <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art2} alt="" />
                      <div className="art-box">
                           <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art3} alt="" />
                      <div className="art-box">
                           <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art4} alt="" />
                      <div className="art-box">
                           <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art5} alt="" />
                      <div className="art-box">
                           <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art1} alt="" />
                      <div className="art-box">
                           <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art2} alt="" />
                      <div className="art-box">
                           <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art3} alt="" />
                      <div className="art-box">
                           <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="art-items mr-2">
                      <img className="w-full" src={art4} alt="" />
                      <div className="art-box">
                           <input class="red-input" type="checkbox" />
                        <p>
                          Meta Martian <strong>#2368</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nft-mask">
                <div className="nft-mask-content">
                  <p className="text-md nft-mask-text">Celestial Martian</p>
                  <p className="text-gray-400 text-sm mt-2">
                    You'll need 4 Meta Martians to initate <br />
                    extraction of Celestial Martian.
                  </p>
                  <img className="mask mt-10 ml-4" src={nftMask} alt="" />
                  <div className="nft-mask-box flex mt-5">
                    <div className="rounded-lg bg-gray-400 mr-10"></div>
                    <div className="rounded-lg bg-gray-400 mr-10"></div>
                    <div className="rounded-lg bg-gray-400 mr-10"></div>
                    <div className="rounded-lg bg-gray-400 mr-10"></div>
                  </div>
                  <button>initate the extraction</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
