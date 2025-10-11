import React, { use, useState } from 'react';
import BoxSettings from '../../components/BoxSettings';
import View from '../../components/View';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FaAngleRight } from 'react-icons/fa';

const Settings = () => {

    return (
        <View className='gap-10 flex flex-col'>
            <View className='flex flex-col gap-3 '>
                <h1 className='font-semibold text-xl'>Geral</h1>
                <BoxSettings>
                    <div>
                        <h2 className='font-semibold'>Notificação</h2>
                        <p className='text-[#989FAB]'>Habilite essa opção para receber notificação</p>
                    </div>
                    <Input type='checkbox' alt='15'/>
                </BoxSettings>

            </View>
            <View className='flex flex-col gap-6'>
                <h1 className='font-semibold text-xl'>Temporizador / app</h1>
                <BoxSettings>
                    <div>
                        <h2 className='font-semibold'>Tempo de foco</h2>
                        <p className='text-[#989FAB]'>Escolha quanto tempo de foco deseja</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <Input type='number' min={15} max={240} />
                        <p className='text-[#989FAB]'>minutos</p>
                    </div>
                </BoxSettings>
                <BoxSettings>
                    <div>
                        <h2 className='font-semibold'>Tempo de descanso</h2>
                        <p className='text-[#989FAB]'>Escolha o tempo de descanso</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <Input type='number' max={20} />
                        <p className='text-[#989FAB]'>minutos</p>
                    </div>
                </BoxSettings>
                <BoxSettings>

                      <div>
                        <h2 className='font-semibold'>BlockApp</h2>
                        <p className='text-[#989FAB]'>Aplicativos para bloquear e links</p>
                    </div>
                    <Button variant='icon'> <FaAngleRight/> </Button>
                </BoxSettings>
                    <BoxSettings>

                      <div>
                        <h2 className='font-semibold'>OpenApps</h2>
                        <p className='text-[#989FAB]'>Aplicativos para abrir (opcional)</p>
                    </div>
                    <Button variant='icon'> <FaAngleRight/> </Button>
                </BoxSettings>
                <View className='items-end flex justify-end'>
                    <Button variant='default' className='rounded-sm w-11' > Salvar </Button>
                </View>
            </View>
        </View>
    );
};

export default Settings;