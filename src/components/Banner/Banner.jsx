import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/9Yt1Fpn/hero-2-jpg.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-[60px] font-bold">Shop With Us</h1>
                        <p className="mb-5">Elevate your style. Explore curated fashion trends, shop effortlessly, and redefine your wardrobe. Your path to unparalleled elegance starts here. Discover today!</p>
                        <Link to="/login">
                            <button className="btn text-white bg-[#2b87ff] rounded-lg hover:bg-transparent border-[#2b87ff] hover:border-[#2b87ff] hover:text-[#2b87ff]">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;