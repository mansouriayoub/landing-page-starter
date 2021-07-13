import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li> */}
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">Management Software</span>
          </>
        )}
        description="The easiest way to manage your Business in seconds."
        button={(
          <Link href="https://smslogiciels.ma">
            <a>
              <Button xl>Demand a Free Demo</Button>
            </a>
          </Link>
        )}
      />
    </Section>
  </Background>
);

export { Hero };
