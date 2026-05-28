import { useState } from "react";
import { Link } from "react-router-dom";
import DesignerImage from "../assets/designerLogo.png";
import CustomerImage from "../assets/customerLogo.png";

export default function GetStarted() {

    const [showDesigner, setShowDesigner] = useState(false);
    const [showCustomer, setShowCustomer] = useState(false);

    return (
        <div className="getStarted">
            <h1>{showDesigner || showCustomer ? "starter guide" : "get started"}</h1>
            {!showDesigner && !showCustomer ? (
                <div className="chooseGuide">

                    <div onClick={() => setShowDesigner(true)}>
                        are you a designer?
                        <img src={DesignerImage} width={150} height={150}/>
                    </div>

                    <div onClick={() => setShowCustomer(true)}>
                        are you a customer?
                        <img src={CustomerImage} width={150} height={150}/>
                    </div>

                </div>
            ) : (
                null
            )}

            <div className="guide">
                {showDesigner && (
                    <div>
                        <h3>designer</h3>

                        <ul>
                           <li>sign up</li>
                           <li>set-up store</li>
                           <li>upload designs</li>
                           <li>recieve orders from customers</li>
                           <li>negotiate payment with the customer and set a price term</li>
                           <li>set an agreement period of completion</li>
                           <li>keep in touch with the customer via our in-chat messaging</li>
                           <li>approve order upon confirmation of customer payment</li>
                           <li>notify customer when design is completed<br/>
                           <span>note the payment will be held by us and will only be 
                              transferred to the designer upon completion and delivery of the design. if 
                              the design is not completed within or before the date set for completion?,
                              the payment will be refunded to customer within 24hours</span></li>
                        </ul>

                        <Link to="/create/user">continue</Link>
                    </div>
                )}
                
                {showCustomer && (
                    <div>
                        <h3>customer</h3>

                        <ul>
                           <li>sign up</li>
                           <li>find a suitable designer</li>
                           <li>choose a design</li>
                           <li>submit your measurement</li>
                           <li>keep in touch with the designer via our in-chat messaging</li>
                           <li>negotiate payment with the designer and set a price term</li>
                           <li>set an agreement period of completion</li>
                           <li>make payment<br /><span>note the payment will be held by us and will only be 
                           transferred to the designer upon completion and delivery of the design. if 
                           the design is not completed within or before the date of completion?,
                           your payment will be refunded within 24hours</span>
                           </li>
                        </ul>

                        <Link to="/create/user">continue</Link>
                    </div>
                )}
            </div>
        </div>
    )
}