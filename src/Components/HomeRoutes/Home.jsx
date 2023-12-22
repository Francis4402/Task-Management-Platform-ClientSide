import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="grid w-full bg-cover bg-center items-center md:h-[800px] min-h-screen" style={{backgroundImage: 'url(./BannerImage.png)'}}>

            <div className="hero-content justify-start lg:px-[200px] md:px-[100px] text-black">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Tasky</h1>
                    <p className="mb-5 lg:max-w-lg md:max-w-xs text-3xl">Track Your Tasks & Do Your Tasks On Time.</p>
                    <Link to='/logins'><button className="btn btn-primary font-bold">Let's Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;