import { reactive } from "vue"

export const store = reactive({
    partners: [
        {
            name: 'Avantagarde',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-1@2x.png'
        },
        {
            name: 'Fastlane',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-9@2x.png'
        },
        {
            name: 'Ron Jones',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-7@2x.png'
        },
        {
            name: 'Chippys',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-3@2x.png'
        },
        {
            name: 'Bullseye',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-4@2x.png'
        },
        {
            name: 'Mighty Furnitures',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-5@2x.png'
        },
    ],
    cardInfo: [
        {
            name: 'ANNA PHILANDROS',
            role: 'Creative Director',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-142@2x-443x424.png'
        },
        {
            name: 'DEXTER MATTHEW',
            role: 'Designer',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-143@2x-443x424.png'
        },
        {
            name: ' RANDY SMITH',
            role: 'Creative Director',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-144@2x-443x424.png'
        },
        {
            name: ' ANGELO GARNER',
            role: 'Co-founder',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-146@2x-443x424.png'
        },
        {
            name: ' JIMMIE BENEDICT',
            role: 'Frontend Developer',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-150@2x-443x424.png'
        },
        {
            name: ' JANET GARNER',
            role: 'Founder',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-145@2x-443x424.png'
        },
    ],
    cardData: [
        {
            icon: 'fa-solid fa-database',
            name: 'Virtual Document'
        },
        {
            icon: 'fa-solid fa-money-bill-1-wave',
            name: 'Flexible Payments'
        },
        {
            icon: 'fa-solid fa-gauge-high',
            name: 'SEO Tools'
        },
        {
            icon: 'fa-regular fa-gem',
            name: 'UI Design'
        }
    ],
    supportCard: [
        {
            title: 'DESIGNING',
            desc: 'All Designs',
            value: '$ 10 /Design',
            feats: [
                'Creative Design Enabled',
                'Vibrant Color Usage',
                'Eye Catching Design',
                'Extreme Typography',
                'Exceptional Design'
            ]
        },
        {
            title: 'DEVELOPMENT',
            desc: 'WordPress Projects',
            value: '$ 10 /Design',
            feats: [
                'Creative Design Enabled',
                'Vibrant Color Usage',
                'Eye Catching Design',
                'Extreme Typography',
                'Exceptional Design'
            ]
        },
        {
            title: 'SEO',
            desc: 'Web Products',
            value: '$ 10 /Design',
            feats: [
                'Creative Design Enabled',
                'Vibrant Color Usage',
                'Eye Catching Design',
                'Extreme Typography',
                'Exceptional Design'
            ]
        },
    ]
});
