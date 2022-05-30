import Button from '@/components/Common/Button/Button';
import React, { useState } from 'react';

interface DataSectionProps {}

const DataSection = ({}: DataSectionProps) => {
    const [width, setWidth] = useState('w-[30vw]');

    return (
        <div
            className={`z-2 fixed right-0 mt-[11vh] h-[84vh] overflow-y-scroll ${width} bg-scBlack-100`}
        >
            <div>
                {/* <div className='ml-[50px] mt-[500px] h-[4000px] w-[50%] bg-green-500'>
                    <Button onClick={() => setWidth('w-[20vw]')}>test</Button>
                </div> */}
            </div>
        </div>
    );
};

export default DataSection;
