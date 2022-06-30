import { FC } from 'react';

type LayoutProps = {
  id: string;
  children: React.ReactNode;
};

const Section: FC<LayoutProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      tabIndex={0}
      className='flex flex-col justify-center items-center min-h-screen'
    >
      {children}
    </section>
  );
};

export default Section;
