import { Fragment } from 'react';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Logo from '@/assets/images/logo/logo_black.svg';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white bg-opacity-60 absolute top-0 left-0 right-0 "
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl lg:max-w-full mx-auto px-4 md:px-0 pt-2">
            <div className="flex justify-between h-16">
              <div className="flex">
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
                <div className="flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black ring-2 ring-inset ring-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary focus:text-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <Icon icon="Close" aria-hidden="true" />
                    ) : (
                      <Icon icon="Menu" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 hidden md:block">
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
            <div className="pt-2 pb-3 px-4">
              <Button
                as="a"
                className="flex items-center justify-center gap-2"
                variant="black"
                size="md"
                href="//app.honey.finance/farm"
                target="_blank"
              >
                Go to App
                <Icon icon="LinkArrow" />
              </Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <p className="pl-4 pb-3 text-sm text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-bold font-sans hover:text-primary">
                Governance
              </p>
              <Disclosure.Button
                as="a"
                href="//discord.gg/T7RQ8hMamB"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:bg-primary hover:text-black focus:bg-primary focus:text-black font-mono font-normal text-lg block pl-4 pr-4 py-1 text-base sm:pl-5 sm:pr-6"
              >
                DAO
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="//blog.honey.finance/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:bg-primary hover:text-black focus:bg-primary focus:text-black font-mono font-normal text-lg block pl-4 pr-4 py-1 text-base sm:pl-5 sm:pr-6"
              >
                Tokenomics
              </Disclosure.Button>
              <Disclosure.Button
                as="p"
                className="text-gray-400 hover:bg-primary hover:text-black focus:bg-primary focus:text-black font-mono font-normal text-lg block pl-4 pr-4 py-1 text-base sm:pl-5 sm:pr-6"
              >
                Forum (Coming Soon)
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <p className="pl-4 pb-3 text-sm text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-bold font-sans hover:text-primary">
                Developer
              </p>
              <Disclosure.Button
                as="a"
                href="//docs.honey.finance/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:bg-primary hover:text-black focus:bg-primary focus:text-black font-mono font-normal text-lg block pl-4 pr-4 py-1 text-base sm:pl-5 sm:pr-6"
              >
                Documentation
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="//github.com/honey-labs"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:bg-primary hover:text-black focus:bg-primary focus:text-black font-mono font-normal text-lg block pl-4 pr-4 py-1 text-base sm:pl-5 sm:pr-6"
              >
                GitHub
              </Disclosure.Button>
              <Disclosure.Button
                as="p"
                className="text-gray-400 hover:bg-primary hover:text-black focus:bg-primary focus:text-black font-mono font-medium text-lg block pl-4 pr-4 py-2 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Honey Labs (Coming Soon)
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Disclosure.Button
                as="a"
                href="//blog.honey.finance/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:bg-primary hover:text-black focus:bg-primary focus:text-black font-mono font-normal text-lg block pl-4 pr-4 py-1 text-base sm:pl-5 sm:pr-6"
              >
                Blog
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
