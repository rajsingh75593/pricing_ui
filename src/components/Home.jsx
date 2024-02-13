import React from 'react'
import { UilCheckCircle, UilReceiptAlt, UilCreateDashboard, UilCog } from '@iconscout/react-unicons'
import { Accordian } from '../pages/Accordian'
import Service from '../pages/Service'

const Home = () => {
    return (
        <>
            <div className="home_container_main">
                <div className="container_center">
                    <div className="title_container">
                        <h1>Pricing plan for every business</h1>
                    </div>
                    <div className="course_list_one">
                        <div className="listing_detail">
                            <li><UilCheckCircle />Tally on mobile</li>
                            <li><UilCheckCircle />Monthaly financial</li>
                            <li><UilCheckCircle />Customer ageing</li>
                            <li><UilCheckCircle />Invoice tracking</li>
                            <li><UilCheckCircle />Unlimeted user</li>
                            <li><a href="">Start free trial</a></li>
                        </div>
                        <div className="pricing_first">
                            <h2>&#8377;<span>2,499</span></h2>
                            <p>per organisation for 1 year</p>
                        </div>
                    </div>
                    <div className="course_list_two">
                        <div className="subscription_detail">
                            Subscribe for two <span>Years</span> and <br />
                            Get <span>1 Yeat</span> of extra validity
                        </div>
                        <div className="subscription_price">
                            <h2>&#8377;<span>4,999</span></h2>
                            <p>per organisation for 2+1 year</p>
                        </div>
                    </div>
                </div>
                <div className="invoice_application">*18% GST applicable on all plans</div>
                <div className="quick_response_box">
                    <div className="integration_box">
                        <div className="integration_icon"><UilCog /></div>
                        <span>Quick integration</span>
                    </div>
                    <div className="center_border"></div>
                    <div className="integration_box">
                        <div className="integration_icon">< UilCreateDashboard /></div>
                        <span>Intuitive user interface</span>
                    </div>
                    <div className="center_border"></div>
                    <div className="integration_box">
                        <div className="integration_icon"><UilReceiptAlt /></div>
                        <span>Reliable reports</span>
                    </div>
                </div>
            </div>
            <Service />
            <div className="question_container">
                <div className="question_box_center">
                    <h1>Frequently asked question</h1>
                    <div className="">
                        <Accordian />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home