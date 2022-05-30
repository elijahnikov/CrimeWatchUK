import Button from '@/components/Common/Button/Button';
import React, { useState } from 'react';

interface DataSectionProps {}

const DataSection = ({}) => {
    const [width, setWidth] = useState('[30vw]');

    return (
        <div
            className={`fixed right-0 float-right h-[100%] w-${width} bg-red-500`}
        >
            <div>
                <Button
                    onClick={() => setWidth('700px]')}
                    className='mt-[50px]'
                >
                    TEST
                </Button>
            </div>
        </div>
    );
};

export default DataSection;
