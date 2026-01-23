import React from 'react'
import styles from './platformsVideo.module.scss';
export default function PlatformsVideo() {
    return (
        <div className={styles.platformsVideoPageAlignment}>
            <div className='container-xs'>
                <iframe
                    src="https://www.youtube.com/embed/9Scs-J-MH0I?autoplay=1&mute=1&loop=1&playlist=9Scs-J-MH0I&playsinline=1"
                    title="YouTube video player"
                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}
