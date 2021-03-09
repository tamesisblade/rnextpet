import React from 'react'
import styles from '../../styles/Home.module.css'
import Modal from './Modal'
import VideoModal from './VideoModal'
function Welcome() {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-lg-6">
                    
                    <Modal/>  
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5>The Best Things For Pets</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <h5 className={styles.welcome_titulo}>Welcome To Petoria</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                            Petoria the ultimate pet shop experience. It really is a paradise for pets and pet owners. We have all the pet supplies, pet food, toys and accessories you and your pet need at great value prices. All our store colleagues are fully trained in pet care and dedicated to the welfare of your animals, with most of them being experienced pet owners.
                            <p></p>
                            So when you are a new owner or an expert, our store colleagues are on hand to help you make the right choices. We also have a fantastic range of free, informative care for you to take away, offering help and advice on how to look after your pet.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 mt-4">
                            <button className={styles.welcome_button}>View Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
