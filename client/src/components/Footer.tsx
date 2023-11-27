import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-blue-900 pt-20 pb-20 pl-32 pr-32">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="row-span-12 xl:col-span-4">
            <div className="mr-12">
              <h4 className="text-white text-3xl mb-6 font-bold">ChatWithDB</h4>
              <p className="text-white/50 dark:text-gray-300">
                What are you waiting for ? Lets go !
              </p>
              <p className="mt-3 text-white dark:text-gray-50 font-bold">
                Follow Us on:
              </p>
              <div className="mt-5">
                <ul className="flex gap-3">
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-violet-500 hover:border-transparent">
                    <a>
                      <i className="uil uil-facebook-f">F</i>
                    </a>
                  </li>
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-sky-500 hover:border-transparent">
                    <a>
                      <i className="uil uil-linkedin-alt">L</i>
                    </a>
                  </li>
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-red-500 hover:border-transparent">
                    <a>
                      <i className="uil uil-google">G</i>
                    </a>
                  </li>
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-blue-500 hover:border-transparent">
                    <a>
                      <i className="uil uil-twitter">T</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
            <p className="mb-6 text-white text-16 font-bold">Company</p>
            <ul className="space-y-4">
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/about">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> About Us
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/contact">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Contact Us
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/services">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Services
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/blog">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Blog
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/team">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Team
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/pricing">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Pricing
                  </a>
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
            <p className="mb-6 text-white text-16 font-bold">For Jobs</p>
            <ul className="space-y-4">
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/job-categories">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Browser Categories
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/job-list">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Browser Jobs
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/job-details">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Job Details
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/bookmark-jobs">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Bookmark Jobs
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
            <p className="mb-6 text-white text-16 font-bold">For Candidates</p>
            <ul className="space-y-4">
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/candidate-list">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Candidate List
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/candidate-grid">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Candidate Grid
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/candidate-details">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Candidate Details
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
            <p className="mb-6 text-white text-16 font-bold">Support</p>
            <ul className="space-y-4">
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/contact">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Help Center
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/faqs">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> FAQ&apos;S
                  </a>
                </Link>
              </li>
              <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <Link legacyBehavior href="/privacy-policy">
                  <a>
                    <i className="mdi mdi-chevron-right"></i> Privacy Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
