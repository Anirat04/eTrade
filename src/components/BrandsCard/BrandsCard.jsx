import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandsCard = () => {

    const [brandsData, setBrandsData] = useState();

    useEffect(() => {
        fetch('https://a-10-sell-shop-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrandsData(data))
    }, [])

    return (
        <div className="bg-slate-100 mb-[100px] pb-[100px]">
            <div className="max-w-[1320px] mx-auto " >
                <div className="common-heading text-center py-[60px]">
                    <h1 className="text-[40px] font-bold text-[#2b87ff]">Brands We Collaborate</h1>
                    <h3 className="text-[18px] italic text-black">Get authentic brand products from us</h3>
                </div>
                <div className="all-brands-cards grid grid-cols-3 justify-items-center gap-10" >
                    {
                        brandsData?.map(data => (
                            <div key={data._id} className="min-w-[400px] max-w-[400px] rounded-lg shadow-md bg-white dark:text-gray-100">
                                <figure className="p-[20px] min-h-[300px] max-h-[300px]">
                                    <img src={data.brandLogoURL} alt="" className="max-h-[300px] mx-auto" />
                                </figure>
                                <hr className="max-w-[275px] mx-auto" />
                                <div className="flex flex-col justify-between mb-[30px]">
                                    <div className="text-center py-[20px]">
                                        <h2 className="text-3xl font-bold tracki">{data.brandName}</h2>
                                    </div>
                                    <Link to={`/brand-products/${data.brandName}`} className="max-w-[250px] mx-auto">
                                        <button type="button" className=" p-3 font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">See All products of {data.brandName}</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandsCard;