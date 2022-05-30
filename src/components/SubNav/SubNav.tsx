import Button from '@/components/Common/Button/Button';
import React from 'react';

interface SubNavProps {}

const SubNav = ({}) => {
    return (
        <div className='fixed top-[5vh] z-10 flex h-[5vh] w-[100vw] items-center border-r-[1px] border-scBorder bg-scBlack-300 text-center'>
            {/* <div className='absolute right-[2vw] h-full w-1/4'>
                <div className='absolute top-0 mt-10 flex items-center'>
                    <a href='/'>
                        <img
                            className='pointer-events-none ml-5 mt-5 h-12 w-12'
                            src='https://i.ibb.co/r4WtSVc/supercrumble800x800.png'
                        />
                    </a>
                </div>

                <div className='absolute bottom-[2vh] mt-10 flex items-center'>
                    <div className='inline text-xs'>
                        <p className='text-gray-400'>© 2022, SuperCrumble</p>
                        <p className='text-scRed'>Privacy Policy</p>
                    </div>
                </div>
            </div> */}
            <h3 className='ml-[1vw] align-middle text-white'>UK Crime Watch</h3>
        </div>
    );
};

export default SubNav;
