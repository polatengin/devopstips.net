import React, { useState, useEffect } from "react";

import { graphql, Link, useStaticQuery } from "gatsby";

import { DayIcon, ExternalLinkIcon, MainLogoIcon, NightIcon, RSSIcon, TwitterIcon } from "./icons";

export default ({ children }) => {
  const [ theme, setTheme ] = useState(undefined);

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, [])

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={`w-screen h-screen overflow-y-scroll overflow-x-hidden ${theme}`}>
      <div className="dark:bg-gray-700">
        <header className="px-1 md:px-6 py-2 h-26 md:h-20 border-b text-gray-700 dark:text-white shadow-sm">
          <div className="max-w-screen-xl mx-auto h-full flex flex-col md:flex-row items-center">
            <h1 className="text-2xl lg:text-3xl my-2 md:my-0">
              <Link to="/" className="flex items-center"><img src="/favicon.svg" width="40" height="40" className="w-10 h-10 inline mr-1" alt="DevOpsTips Logo" />{ site.siteMetadata.title }</Link>
            </h1>
            <div className="flex-grow flex justify-end items-center">
              <Link to="/posts" className="ml-2 lg:ml-4 md:py-2 md:px-4 py-1 px-2 text-md lg:text-xl hover:bg-gray-100 dark:hover:bg-gray-800">Posts</Link>
              <a href="https://github.com/polatengin/devops.tips/issues" target="_blank" className="ml-2 lg:ml-4 md:py-2 md:px-4 py-1 px-2 text-md lg:text-xl hover:bg-gray-100 dark:hover:bg-gray-800 flex items-baseline" rel="noreferrer">Issues <ExternalLinkIcon className="ml-1 inline w-4 h-4" /></a>
              <a href="https://github.com/polatengin/devops.tips" target="_blank" className="ml-2 lg:ml-4 md:py-2 md:px-4 py-1 px-2 text-md lg:text-xl hover:bg-gray-100 dark:hover:bg-gray-800 flex items-baseline" rel="noreferrer">Contribute <ExternalLinkIcon className="ml-1 inline w-4 h-4" /></a>
              <button className="ml-4 w-16 h-8 hidden md:flex items-center bg-gray-100 dark:bg-gray-800 outline-none focus:outline-none rounded-full shadow-inner" aria-label="Toggle Theme" onClick={() => {
                localStorage.setItem("theme", theme !== "dark" ? "dark" : "light" );
                setTheme(localStorage.getItem("theme"));
              }}>
              { theme !== "dark" ? <DayIcon className="w-4 h-4 ml-2" /> : <NightIcon className="w-4 h-4 ml-9" /> }
              </button>
            </div>
          </div>
        </header>
        <main className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row">
          <aside className="w-screen md:w-56 flex-none text-gray-700 dark:text-white px-3 md:px-6 py-6 border-t md:border-t-0 md:border-r">
            <h1 className="text-2xl mb-6">DevOps Tips and Tricks</h1>
            <h2 className="text-lg mt-6">Tips and Tricks about Azure DevOps and GitHub</h2>
            <p><a href="https://twitter.com/devops_tips" className="inline-flex items-center mt-6" target="_blank" rel="noreferrer"><TwitterIcon className="w-6 h-6 text-blue-500 inline mr-2" /> @devops_tips</a></p>
            <p><a href="/index.xml" className="inline-flex items-center mt-6" target="_blank"><RSSIcon className="w-6 h-6 text-blue-500 inline mr-2" /> RSS</a></p>
          </aside>
          <section className="flex-1 m-4 md:mt-6 ml-4 md:ml-6 xl:mr-0">
            {children}
          </section>
        </main>
        <footer className="h-10 flex items-center border-t text-gray-700 dark:text-gray-100">
          <p className="pl-6 max-w-screen h-full flex flex-grow items-center text-sm">© {new Date().getFullYear()}, Built with ❤ by <Link to="/about-me" className="ml-2 hover:text-blue-500">Engin Polat</Link></p>
          <button className="w-8 h-8 mr-6 inline md:hidden items-center bg-gray-100 dark:bg-gray-800 outline-none focus:outline-none rounded-full shadow-inner" onClick={() => {
            localStorage.setItem("theme", theme !== "dark" ? "dark" : "light" );
            setTheme(localStorage.getItem("theme"));
          }}>
            { theme !== "dark" ? <DayIcon className="w-4 h-4 ml-2" /> : <NightIcon className="w-4 h-4 ml-2" /> }
          </button>
        </footer>
      </div>
    </div>
  );
};
