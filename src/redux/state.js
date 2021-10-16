


const state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 5 },
            { id: 2, message: 'Hi, how is it going?', likesCount: 12 },
            { id: 3, message: 'Hi, is everything okay?', likesCount: 9 }
        ],
        dialogs: [
            { id: 1, name: 'Nasip' },
            { id: 2, name: 'Aidar' },
            { id: 3, name: 'Ramazan' },
            { id: 4, name: 'Emil' },
            { id: 5, name: 'Ernest' },
            { id: 6, name: 'Kadyr' }
        ]
    },

    messagesPage: {
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'How is it going?' },
            { id: 4, message: 'Great job' }
        ]
    }

}

export default state;