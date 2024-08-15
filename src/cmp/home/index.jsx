import Layout from "../layout";
const Home = () => {
    return (
        <Layout>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    Array(12).fill(0).map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-3">
                            <img className="rounded-lg" src={`https://assets-prd.ignimgs.com/2022/06/09/x-men-thumbnail-1654735362344.jpg`} />
                            <div className="flex gap-x-3">
                                <img src="https://yt3.googleusercontent.com/LdNzt02C9nNyMxEt2CW1NBa-GOG2Ek4TTEptNW5bww1N1HZmMlsCoVJ1dPhHcrz4JDDJZCQwCA=s176-c-k-c0x00ffffff-no-rj"
                                    className="rounded-full w-10 h-10" />

                                <div>
                                    <h1 className="text-sm font-semibold mb-3">Responsive Header Navigation Menu For A Website | With Dropdown Menus - HTML CSS Javascript & Jquery</h1>
                                    <div className="flex items-center gap-x-2 mb-1 ">
                                        <p className="text-xs text-slate-500">Set India</p>
                                        <span className="material-icons" style={{fontSize: 16}}>check_circle</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                    <p className="text-xs text-slate-500">120K Views .</p>
                                    <p className="text-xs text-slate-500">1 Day Ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
            ))
                }
        </div>
        </Layout >

    )
}
export default Home;