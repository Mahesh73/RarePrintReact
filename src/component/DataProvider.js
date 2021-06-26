import React, { createContext, useState } from "react"

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [ products, setProducts ] = useState([
        {
            id: 1,
            title: "Homoeopathy Stickers",
            imgsrc: [
                "https://rareprint.in/images/product1.jpeg"
            ],
            desc: "Homoeopathy sticker is used to stick on homoeopathic medicine bottle for prescribing doses and information.",
            sizes: [
                '05ml droper size:- 2" * 0.75',
                '05ml droper size:- 2" * 1"',
                '15ml droper size:- 2" * 1.25',
                '30ml droper size:- 2.5" * 1.5',
                '1/2 dram size:- 1.5" * 0.75"',
                '1 dram size:- 1.5" * 1"',
                '2 dram size:- 1.75" * 1.25"',
            ],
            features: [
                'Multicolor printing',
                'Finish:- Glossy Photo Sticker',
                'Thickness:- 130 GSM',
                'Sticking:- Extra Adhesive',
                '500 dpi resolution printing'
            ],
            pDetails: "1 pack of 1800 stickers(50 sheets) Sticker size:- 1'*0.75' inch",
            price: "499/-"
        },
        {
            id: 2,
            title: "Homoeopathy Envelope",
            imgsrc: [
                "https://rareprint.in/images/envelop.jpeg"
            ],
            desc: "Homoeopathic envelopes is used to carry and hold homoeopathic medicine bottles.",
            sizes: [
                'Small (3"×2.5")',
                'Medium (4.5"×3.5")',
                'Large (7.5"×5")',
                'Extra Large (9"×4")',
            ],
            features: [
                'Multicolor printing',
                'Front & Back Print',
                '700 dpi resolution printing'
            ],
        },
        {
            id: 3,
            title: "Visiting Cards",
            imgsrc: [
                "https://rareprint.in/images/visiting.jpeg"
            ],
            features: [
                'Multicolor printing',
                'Both Sides Printing',
                '250-370 GSM paper quality',
                'Glossy & Matt Lamination'
            ],
        },
        {
            id: 4,
            title: "Multicolor Letterheads/LetterPad",
            imgsrc: [
                "https://rareprint.in/images/product4.jpeg"
            ],
            desc: "Multicolour Letterheads used in clinics and hospitals for prescribing medicines and medication.",
            features: [
                'Multicolor printing',
                'Both Sides Printing',
                '80 GSM maplitho paper quality'
            ],
        },
        {
            id: 5,
            title: "Hospital/Clinic patient files",
            imgsrc: [
                "https://rareprint.in/images/files.jpeg"
            ]
        },
        {
            id: 6,
            title: "Boards",
            imgsrc: [
                "https://rareprint.in/images/newBanner.png"
            ]
        },
    ])
    return(
        <DataContext.Provider value={[ products, setProducts ]}>
            {props.children}
        </DataContext.Provider>
    )
}