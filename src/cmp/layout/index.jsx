import { useState } from "react";
const menus = [
    {
        label: 'Home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'Music',
        icon: 'headphones'
    },
    {
        label: 'Home',
        icon: 'home'
    },
    {
        label: 'Home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'Music',
        icon: 'headphones'
    },
    {
        label: 'Home',
        icon: 'home'
    },
    {
        label: 'Home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'Music',
        icon: 'headphones'
    }
]
const Layout = ({children})=>{
    const [open, setOpen]= useState(true);
    return(
        <div>
            <nav className="bg-white border-b fixed left-0 top-0 w-full h-16 z-10 px-5 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <button onClick={()=>setOpen(!open)} className="hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                    <span className="material-icons-outlined" style={{fontSize: 24}}>menu</span>
                </button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png" alt="logo" className="w-16" />
            </div>

            <div className= "w-1/2 flex flex-col">
                <form className="flex">
                    <input type="text" className="border border-slate-300 rounded-l-full h-10 flex-1 p-3" placeholder="Search" />
                    <button className="border border-slate-300 rounded-r-full border-l-0 h-10 flex justify-center items-center w-16">
                        <span className="material-icons-outlined text-slate-400" style={{fontSize: 24}}>search</span>
                    </button>
                </form>
            </div>

            <div className="flex items-center gap-x-2">
                <button className="hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                    <span className="material-icons-outlined" style={{fontSize: 24}}>video_call</span>
                </button>
                <button className="hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                    <span className="material-icons-outlined" style={{fontSize: 24}}>notifications</span>
                </button>
                <img src="https://yt3.googleusercontent.com/_AH7LmPfFzjMnSj2I9L7_fCWCGbDbD2m4JiVWdM_TnXk03jQ4ZV13PitTj_-izuvN25IpLKTjg=s176-c-k-c0x00ffffff-no-rj" alt="logo" className="w-12 h-10 rounded-full" />
            </div>


            </nav>
            <aside className="bg-white overflow-auto border-r h-full fixed top-0 left-0 mt-16 flex flex-col px-3 gap-y-2 py-3"
            style={{
                width: open ? 250 : 70,
                transition: '0.2s'
            }}>
                {
                    menus.map((item, index)=>(
                        <button key={index}
                        className={`flex ${open ? 'flex-row':'flex-col'} ${open ? 'items-start': 'items-center'} gap-x-5 py-2 px-2 rounded-lg hover:bg-gray-100`}>
                            <span className="material-icons-outlined text-slate-700">{item.icon}</span>
                            <span className={` text-slate-700 ${open ? null : 'text-xs' }`}>
                                {open ? item.label : item.label.slice(0,5)}</span>

                        </button>
                    ))
                }

            </aside>
            <section className=" mt-16 p-5"
            style={{
                marginLeft: open ? 250 : 70,
                transition: '0.2s'
            }}>
                {children}
            </section>
        </div>
    )
}
export default Layout;