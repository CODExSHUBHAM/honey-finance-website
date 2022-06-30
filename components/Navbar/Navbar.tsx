import { Fragment } from 'react';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Logo from '@/assets/images/logo/logo_black.svg';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white bg-opacity-60 border-b">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 md:px-0 pt-2">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <div className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center relative">
                  <Image
                    className="block h-full w-auto"
                    src={Logo}
                    alt="Honey Finance"
                    height={100}
                    width={120}
                  />
                </div>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Menu as="div" className="relative">
                  {({ open }) => (
                    <Fragment>
                      <div className="h-full flex items-center">
                        <Menu.Button>
                          <span className="sr-only">Open Governance Menu</span>
                          <p
                            className={`${
                              open ? 'text-primary' : 'text-black'
                            } inline-flex items-center px-1 pt-1 text-sm font-medium font-mono hover:text-primary`}
                          >
                            Governance
                          </p>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right -mt-2 -left-12 absolute w-48 rounded-sm shadow-default-mini-left border border-black shadow-primary py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="//discord.gg/T7RQ8hMamB"
                                target="_blank"
                                className={`${
                                  active ? 'bg-primary' : ''
                                } text-center block px-4 py-2 text-black text-sm font-medium font-mono hover:text-white`}
                                rel="noreferrer"
                              >
                                DAO
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="//blog.honey.finance/"
                                target="_blank"
                                className={`${
                                  active ? 'bg-primary' : ''
                                } text-center block px-4 py-2 text-black text-sm font-medium font-mono hover:text-white`}
                                rel="noreferrer"
                              >
                                Tokenomics
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <p
                                className={`${
                                  active ? 'bg-neutral-200' : ''
                                } cursor-not-allowed text-center block px-4 py-2 text-black text-sm font-medium font-mono hover:text-black`}
                              >
                                {active ? 'Coming Soon' : 'Forum'}
                              </p>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Fragment>
                  )}
                </Menu>
                <Menu as="div" className="relative">
                  {({ open }) => (
                    <Fragment>
                      <div className="h-full flex items-center">
                        <Menu.Button>
                          <span className="sr-only">Open Developer Menu</span>
                          <p
                            className={`${
                              open ? 'text-primary' : 'text-black'
                            } inline-flex items-center px-1 pt-1 text-sm font-medium font-mono hover:text-primary`}
                          >
                            Developer
                          </p>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right -mt-2 -left-12 absolute w-48 rounded-sm shadow-default-mini-left border border-black shadow-primary py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="//docs.honey.finance/"
                                target="_blank"
                                className={`${
                                  active ? 'bg-primary' : ''
                                } text-center block px-4 py-2 text-black text-sm font-medium font-mono hover:text-white`}
                                rel="noreferrer"
                              >
                                Documentation
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="//github.com/honey-labs"
                                target="_blank"
                                className={`${
                                  active ? 'bg-primary' : ''
                                } text-center block px-4 py-2 text-black text-sm font-medium font-mono hover:text-white`}
                                rel="noreferrer"
                              >
                                GitHub
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <p
                                className={`${
                                  active ? 'bg-neutral-200' : ''
                                } cursor-not-allowed text-center block px-4 py-2 text-black text-sm font-medium font-mono hover:text-black`}
                              >
                                {active ? 'Coming Soon' : 'Honey Labs'}
                              </p>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Fragment>
                  )}
                </Menu>
                <a
                  href="//blog.honey.finance/"
                  target="_blank"
                  className="text-black inline-flex items-center px-1 pt-1 text-sm font-medium font-mono hover:text-primary"
                  rel="noreferrer"
                >
                  Blogs
                </a>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Button
                    as="a"
                    className="flex items-center gap-2"
                    variant="black"
                    size="sm"
                    href="//app.honey.finance/farm"
                    target="_blank"
                  >
                    Go to App
                    <Icon icon="LinkArrow" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  {/* <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  /> */}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <div className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
