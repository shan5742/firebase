import React from 'react';
import SignUpForm from '../SignUp';
import SignInForm from '../SignIn';
import PasswordForget from '../PasswordForget';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { IoIosArrowDown } from 'react-icons/io';

const HomePage = () => (
  <div className="bg-blue">
    <div class="container h-screen max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white py-8 rounded shadow-md text-black w-full border border-bottom-black">
        <Accordion
          allowZeroExpanded={false}
          allowMultipleExpanded={false}
          /* preExpanded="open" */
        >
          <div className="border-b border-black">
            <AccordionItem uuid="open" className="pb-2">
              <AccordionItemHeading>
                <AccordionItemButton className="outline-none">
                  <div className="flex flex-row justify-between px-6">
                    <h1 class="mb-8 text-3xl font-medium text-center">
                      Sign In
                    </h1>
                    <IoIosArrowDown />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-8">
                <SignInForm />
                <div className="flex flex-row justify-start pl-6 my-4">
                  <h2 className=" text-lg">Forgot your password?</h2>
                </div>
                <div className="mb-4">
                  <PasswordForget />
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="outline-none">
                <div className="flex flex-row justify-between px-6">
                  <h1 class="text-3xl font-medium text-center mb-4 mt-4">
                    Sign Up
                  </h1>
                  <div className="mt-4">
                    <IoIosArrowDown />
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel className="px-8">
              <SignUpForm />
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);

export default HomePage;
