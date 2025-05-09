import React from 'react'

const Profiles = () => {
  return (
    <>
    <main id='Profiles' className='min-h-screen pt-2'>

        <div className=' w-3/4 flex justify-center mt-20'>
        <div className='flex items-center gap-6'>
            <h1 className='text-3xl text-[#ccd6f6] font-calibri font-semibold'>
              <span className='text-xl text-[#64ffda]'>05.  </span>  
              Codeing Profiles
            </h1>
            <div className='w-72 h-px bg-slate-500' />
        </div>
        </div>

        <div>
            <div>
                {/* <img loading='lazy' src="https://leetcard.jacoblin.cool/sahanirohan313?sheets=url1&ext=heatmap" alt="" /> */}
                <img loading='lazy' src="https://leetcard.jacoblin.cool/sahanirohan313?sheets=url1,url2&ext=heatmap" alt="" />
            </div>
            <div className='flex items-center'>
            <img src="https://github-readme-stats.vercel.app/api?username=rohansahani-sde&show_icons=true&theme=radical" alt="GitHub Stats" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohansahani-sde&exclude_repo=github-readme-stats,anuraghazra.github.io" alt="" />
            </div>
            <div>
            <a href="https://github.com/anuraghazra/github-readme-stats">
  <img height='200' align="center" src="https://github-readme-stats.vercel.app/api?username=rohansahani-sde" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img height='200' align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=rohansahani-sde&layout=compact&langs_count=8&card_width=320" />
</a>
            </div>
        </div>

    </main>
    </>
  )
}

export default Profiles