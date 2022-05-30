import React from 'react';

interface FooterProps {}

const Footer = ({}) => {
    return (
        <div className='absolute bottom-0 z-10 flex h-[5vh] w-[100vw] items-center bg-scBlack-100 text-center'>
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
            <p className='mr-[5px] ml-[1vw] text-sm text-white'>Made by</p>
            <a
                target={'_blank'}
                href='https://www.linkedin.com/in/elijah-posnikov/'
                className=' align-middle text-sm text-scRed underline'
            >
                Elijah Posnikov.
            </a>
            <p className='float-right ml-[10px] text-xs text-gray-500'>
                Data supplied by data.police.uk
            </p>
        </div>
    );
};

export default Footer;
