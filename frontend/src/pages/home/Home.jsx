import React from 'react'
import Hero from './Hero'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Hero />
      <div className='home-content-container'>
        <h1 className='home-heading'>
          Maram Naga Tribe in the hills of Manipur, India
        </h1>
        <p className='home-intro-text home-py-4'>
          Welcome to <strong>Maram Tribe Stories</strong>, a platform dedicated to preserving and sharing the vibrant culture, traditions, and wisdom of the <strong>Maram Naga</strong> community. Nestled in the hilly terrain of <strong>Senapati District</strong> in <strong>Manipur, India</strong>, the Maram people are an integral part of the Naga ethnic group, with a rich cultural heritage shaped by centuries of traditions, stories, and rituals. Despite their challenges and the passage of time, the Marams continue to hold onto their unique identity through their language, festivals, and lifestyle.
        </p>
        <p className='home-website-purpose home-py-4'>
          This website is a space to showcase the stories of the Maram community, explore their customs, and honor the resilience of a tribe that has weathered many challenges, including the pressures of modernization, socio-political unrest, and a declining population. It is also a tribute to the people who continue to fight for the survival of their language and heritage in the face of these difficulties. Here, we aim to celebrate the Maram Naga tribe&apos;s essence, highlight their struggles, and share their journey towards ensuring their legacy continues for future generations.
        </p>
        <h2 className='home-why-this-website home-text-2xl home-font-semibold home-py-6'>
          Why This Website?
        </h2>
        <p className='home-website-goals home-text-lg home-py-4'>
          The <strong>Maram Tribe Stories</strong> website serves as a vital resource for anyone interested in understanding the Maram Naga tribe and the ongoing efforts to preserve their cultural heritage. This site aims to:
        </p>
        <div className='home-goals-list'>
          <p><strong>Raise awareness</strong> about the Maram people&apos;s struggles, including their classification as a <strong>Particularly Vulnerable Tribal Group (PVTG)</strong> and their socio-economic challenges.</p>
          <p><strong>Preserve their cultural identity</strong>, including their language, festivals, traditional practices, and community life, which are at risk of fading due to modern influences.</p>
          <p><strong>Educate</strong> the public about the Marams&apos; distinctive customs, stories, and lifestyles, ensuring that these traditions are passed down to future generations and shared with a global audience.</p>
        </div>
        <p className='home-invitation home-py-4'>
          The stories shared on this website are crafted with the intention of fostering a deeper connection between the Maram community and the world outside, helping bridge gaps in understanding, empathy, and respect.
        </p>
        <h2 className='home-story-of-culture home-text-2xl home-font-semibold home-py-6'>
          Story of the Maram Community and Culture
        </h2>
        <p className='home-culture-description home-py-4'>
          The <strong>Maram Naga</strong> tribe traces its roots to the hills of <strong>Manipur</strong>, where they live in small villages scattered across the land. These people are united by a shared history, language, and set of customs that have endured through generations. <strong>Maram Khullen</strong>, the largest village in the region, stands as the epicenter of Maram culture. It is here that the tribe&apos;s deep connection to the land, their rituals, and their way of life continue to thrive despite external pressures.
        </p>
        {/* Rest of the content */}
      </div>
    </div>
  )
}

export default Home
