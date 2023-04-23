import React from "react";




export const contextDefaultData = {
    id: 0,
    array: [
    {
        id: [1, 2],
        main: { 
            id: 1,
            name: "Microsoft Project",
            functionality: 3,
            integration: 3,
            easeOfUse: 2,
            cost: 1,
            technicalSupport: 3
        },

        synonym: {
            id: 2,
            name: "Проект Бухгалтерия (1С)",
            functionality: 3,
            integration: 3,
            easeOfUse: 2,
            cost: 2,
            technicalSupport: 2
        }
    },
    {
        id: [3, 4],
        main: { 
            id: 3,
            name: "Salesforce",
            functionality: 3,
            integration: 3,
            easeOfUse: 3,
            cost: 3,
            technicalSupport: 3
        },

        synonym: {
            id: 4,
            name: "Bitrix24",
            functionality: 3,
            integration: 3,
            easeOfUse: 2,
            cost: 3,
            technicalSupport: 3
        }
    },
    {
        id: [5, 6],
        main: { 
            id: 5,
            name: "Odoo",
            functionality: 3,
            integration: 3,
            easeOfUse: 2,
            cost: 2,
            technicalSupport: 3
        },

        synonym: {
            id: 6,
            name: "1С:Предприятие 8",
            functionality: 3,
            integration: 3,
            easeOfUse: 2,
            cost: 3,
            technicalSupport: 3
        }
    },

    {
        id: [7, 8],
        main: { 
            id: 7,
            name: "Hubspot",
            functionality: 3,
            integration: 3,
            easeOfUse: 3,
            cost: 3,
            technicalSupport: 3
        },

        synonym: {
            id: 8,
            name: "AmoCRM",
            functionality: 3,
            integration: 3,
            easeOfUse: 3,
            cost: 2,
            technicalSupport: 3
        }
    },

    {
        id: [9, 10],
        main: { 
            id: 9,
            name: "Dropbox",
            functionality: 3,
            integration: 3,
            easeOfUse: 3,
            cost: 2,
            technicalSupport: 3
        },

        synonym: {
            id: 10,
            name: "Яндекс.Диск",
            functionality: 2,
            integration: 2,
            easeOfUse: 2,
            cost: 3,
            technicalSupport: 3
        }
    },

    {
        id: [11, 12],
        main: { 
            id: 11,
            name: "BambooHR",
            functionality: 3,
            integration: 3,
            easeOfUse: 3,
            cost: 1,
            technicalSupport: 3
        },

        synonym: {
            id: 12,
            name: "Directum HRM",
            functionality: 3,
            integration: 3,
            easeOfUse: 3,
            cost: 1,
            technicalSupport: 3
        }
    },
]
}




const MyContext = React.createContext(contextDefaultData);


export default MyContext;

