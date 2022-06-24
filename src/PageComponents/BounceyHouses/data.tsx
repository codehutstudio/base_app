export default {
    components: {
        header: {
            links: [
                { name: 'Inventory', link: 'inventory', type: 'dropdown', style: 'picture', show: true },
                {
                    name: "About Us", link: "about-us", type: 'dropdown', show: true, children: [
                        { name: 'FAQs', link: 'faqs', show: true },
                        { name: "Contact Us", link: 'contact-us', show: true },
                        { name: "Reviews", link: 'reviews', show: false }
                    ]
                },
                { name: null, link: 'cart', type: 'shoppingCart', style: 'popup' }
            ]
        }
    },
    pages: {
        home: {
            hero: {
                text: 'We are your local go-to for inflatable, bounce house, and party event rentals.',
                buttonText: 'Book Now!'
            },
            content: {
                heading: 'Welcome',
                sections: {
                    left: [
                        { type: 'paragraph', value: <p>We are your&nbsp;<strong>#1 source</strong>&nbsp;for inflatable and party rentals. We pride ourselves in providing the absolute&nbsp;<strong>best “bounce” for your buck</strong>&nbsp;in the industry. With every rental and every event we focus on providing world-class service so you can focus on having on having&nbsp;<strong>FUN</strong>.</p> },
                        { type: 'paragraph', value: <p>We also pride ourselves in providing&nbsp;<strong>clean and safe rentals</strong>&nbsp;at the most competitive pricing around.&nbsp; Each unit is cleaned and sanitized after every rental to guarantee your safety and satisfaction.&nbsp; We always follow the&nbsp;<strong>strictest safety guidelines</strong>&nbsp;and we absolutely will not sacrifice your safety for business.&nbsp;<strong>EVER</strong>.&nbsp;</p> },
                        { type: 'button', value: 'View Our Inventory' }
                    ],
                }

            },
            about: {},
            contact: {}
        }
    }
}