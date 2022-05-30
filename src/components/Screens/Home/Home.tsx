import InputField from '@/components/Common/InputField/InputField';
import DataSection from '@/components/DataSection/DataSection';
import MapSection from '@/components/MapSection/MapSection';
import { useEffect, useState } from 'react';

interface HomeProps {}

const Home = ({}) => {
    const [data, setData] = useState([]);
    const [dataSectionWidth, setDataSectionWidth] = useState('w-[30vw]');
    const [mapSetionWidth, setMapSectionWidth] = useState('w-[70vw]');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://data.police.uk/api/crimes-street/all-crime?lat=51.52089321090866&lng=-0.1146880278553249&date=2022-02'
            );
            if (response.ok) {
                const data = await response.json();
                setData(data[0]);
            }
        };

        fetchData();
    }, []);

    const handleChange = () => {};

    return (
        <>
            <section className='h-[100vh] bg-scBlack-300'>
                <div className='fixed top-[5vh] z-10 flex h-[6vh] w-[100vw] items-center border-r-[1px] border-scBorder bg-scBlack-300 text-center'>
                    <div className='ml-5'>
                        <InputField
                            name='locationSearch'
                            placeholder='Search for a location...'
                            onChangeHandler={handleChange}
                        />
                    </div>
                </div>
                {/* <p className='text-white'>{JSON.stringify(data)}</p> */}
                <MapSection />
                <DataSection />
            </section>
        </>
    );
};

export default Home;
