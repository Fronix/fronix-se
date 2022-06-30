import { Transition } from '@headlessui/react';
import type { GetStaticProps, NextPage } from 'next';
import Section from '../components/Section/Section';
import { Resume } from '../types/gitconnect';

type HomeProps = {
  resume: Resume;
};

const Home: NextPage<HomeProps> = ({ resume }) => {
  return (
    <>
      <Section id='intro'>
        <Transition show appear>
          <Transition.Child
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-y-full'
            enterTo='translate-y-0'
          >
            <h1 className='text-textLink font-serif'>Hello, my name is</h1>
          </Transition.Child>
          <Transition.Child
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
          >
            <h2 className='text-6xl font-sans font-semibold'>Oscar Martin</h2>
          </Transition.Child>
          <Transition.Child
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-y-full'
            enterTo='translate-y-0'
          >
            <h1 className='text-textLink font-serif pt-3'>But you can call me fronix.</h1>
          </Transition.Child>
          <Transition.Child
            enter='transition-opacity duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
          >
            <p className='max-w-lg pt-2 text-text'>{resume.basics.summary.split(/\n/)[0]}</p>
          </Transition.Child>
        </Transition>
      </Section>

      <Section id='about'>
        <h2 className='text-lightestText font-serif text-4xl'>About me</h2>
        <p className='max-w-lg'>{resume.basics.summary}</p>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://gitconnected.com/v1/portfolio/fronix');

  const resume = await res.json();

  return {
    props: {
      resume
    },
    revalidate: 300
  };
};

export default Home;
