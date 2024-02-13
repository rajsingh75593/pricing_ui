import React from 'react'
import { UilMobileAndroidAlt, UilUsersAlt, UilTruck, UilChartLine, UilDollarSign, UilFileSearchAlt, UilDatabase, UilEye } from '@iconscout/react-unicons'

const Service = () => {
    return (
        <div className="included_service_box">
            <div className='service-heading'>What's included</div>
            <div className='service-detaling'>Get Mobile and Web access with Unlimeted users.</div>
            <div className="service_inner_box">
                <div className="tally_service">
                    <i><UilMobileAndroidAlt /></i>
                    <h4><span>|</span>Tally on mobile</h4>
                    <p>Lorem ipsum dolor sit explicabo ipsa, cum molestias itaque suscipit</p>
                </div>
                <div className="tally_service">
                    <i><UilUsersAlt /></i>
                    <h4><span>|</span>Costumers</h4>
                    <p>Lorem ipsum dolor sit explicabo ipsa, cum molestias itaque suscipit</p>
                </div>
                <div className="tally_service">
                    <i>< UilTruck /></i>
                    <h4><span>|</span>Suppliers</h4>
                    <p>Lorem ipsum dolor sit explicabo ipsa, cum molestias itaque suscipit</p>
                </div>
                <div className="tally_service">
                    <i><UilChartLine /></i>
                    <h4><span>|</span>Analytics</h4>
                    <p>Lorem ipsum dolor sit explicabo ipsa, cum molestias itaque suscipit</p>
                </div>
                <div className="tally_service">
                    <i>< UilDollarSign /></i>
                    <h4><span>|</span>Financials</h4>
                    <p>Lorem ipsum dolor sit explicabo ipsa, cum molestias itaque suscipit</p>
                </div>
                <div className="tally_service">
                    <i><UilFileSearchAlt /></i>
                    <h4><span>|</span>Audit</h4>
                    <p>Lorem ipsum dolor sit explicabo ipsa, cum molestias itaque suscipit</p>
                </div>
                <div className="tally_service">
                    <i>< UilDatabase /></i>
                    <h4><span>|</span>Ratios</h4>
                    <p>Lorem ipsum dolor sit explicabo ipsa, cum molestias itaque suscipit</p>
                </div>
                <div className="tally_service">
                    <i><UilEye /></i>
                    <h4><span>|</span>Birde's eye View</h4>
                    <p>Lorem ipsum dolor sit explicabo ipsa, cum molestias itaque suscipit</p>
                </div>
            </div>
        </div>
    )
}

export default Service