import React from 'react';
import Button from '../../components/Button';

const HomeCounter = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-5'>
       <h1 className='font-bold text-4xl'>Sessão de foco</h1>
       <h2 className='text-[#989FAB]'> Após apertar o play o app focus ira bloquear aplicativos selecionados</h2>
       <section>
           <div className='text-8xl font-semibold'> 10:20:30</div>
       </section>
       <Button variant='default'>start</Button>
    </div>
  );
};

export default HomeCounter;