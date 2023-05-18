let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi', likeCount: 100},
                {id: 2, message: 'What are you doing', likeCount: 50}
            ],
            newPostText : 'Enter the text'
        },

        messagePage: {
            dialogs: [
                {id: 1, name: 'Name1'},
                {id: 2, name: 'Name2'},
                {id: 3, name: 'Name3'},
                {id: 4, name: 'Name4'}
            ],
            messageDate: [
                {id: 1, text: 'Hi'},
                {id: 2, text: 'How are you'},
                {id: 3, text: 'What am i doing here'}
            ]
        },

        siteBar: {
            friendsName: [
                {id: 1, name: 'Name1'},
                {id: 1, name: 'Name2'},
                {id: 1, name: 'Name3'},
                {id: 1, name: 'Name4'}
            ]
        }
    },
    getState() {
      return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.post.push(newPost)
        this._callSubscriber(this._state)
    },
    updateNewText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
}

export default store;