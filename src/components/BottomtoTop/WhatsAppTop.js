import React from 'react'
import whats from "../../assets/images/whatsapp.png"
const WhatsAppTop = () => {
    return (
        <div>
            <div>
                <div className="fixed bottom-2 left-2">
                    <a
                        href="https://wa.me/919443936250"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <img src={whats} alt="whatsapp " className="h-12" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WhatsAppTop